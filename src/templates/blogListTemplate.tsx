import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { BlogDateIcon, BlogTimeIcon } from '../components/blogIcon';
import parse from 'html-react-parser';
import * as JsSearch from 'js-search';
import Seo from '../components/seo';
import { FrontMatter, Node } from 'types/markdown';

interface BlogListPageProps {
  pageContext: {
    nodes: Node[]
  }
}

const BlogListPage = ({ pageContext }: BlogListPageProps) => {
  const { nodes } = pageContext

  const [search, setSearch] = useState(null);
  const [term, setTerm] = useState('');
  const [queryResult, setQueryResult] = useState<Node[]>([]);
  const [selectedTag, setSelectedTag] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    let result: Node[] =
      searchTerm === '' ? nodes : search.search(searchTerm);

    if (selectedTag) {
      result = result.filter((node: Node) =>
        node.frontmatter.tags.some((tag) => tag === selectedTag)
      );
    }

    setTerm(searchTerm);
    setQueryResult(result);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = (e.target as HTMLButtonElement).value
    const clickedTag = buttonValue === selectedTag ? '' : buttonValue;
    const filteredResult =
      clickedTag === ''
        ? nodes
        : nodes.filter((node) =>
            node.frontmatter.tags.some((tag) => tag === clickedTag)
          );
    setSelectedTag(clickedTag);
    setQueryResult(filteredResult);
    setTerm('');
  };

  useEffect(() => {
    const blogs = nodes;
    const jsSearch = new JsSearch.Search('id');

    jsSearch.addIndex(['frontmatter', 'title']);
    jsSearch.addDocuments(blogs);

    setSearch(jsSearch);
    setQueryResult(blogs);
  }, [nodes]);

  return (
    <div className="content-wrapper">
      <Seo title="Blog" description="This a my blog." url="blog" />
      <section className="blog-list-wrapper">
        <div className="blog-search-textbox-container">
          <input
            className="blog-search-textbox"
            id="Search"
            value={term}
            onChange={handleChange}
            placeholder="Search blog posts..."
            autoComplete="off"
          />
        </div>
        <TagList
          nodes={nodes}
          selectedTag={selectedTag}
          onClick={handleClick}
        />
        {queryResult?.map(({ id, html, timeToRead, frontmatter }) => (
          <BlogList
            key={id}
            timeToRead={timeToRead}
            frontmatter={frontmatter}
            html={html}
          />
        ))}
      </section>
    </div>
  );
};

interface TagListProps {
  nodes: Node[];
  selectedTag: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TagList = ({ nodes, selectedTag, onClick }: TagListProps) => {
  const tagSet = new Set<string>();
  nodes.forEach((node) =>
    node.frontmatter.tags.forEach((tag) => tagSet.add(tag))
  );
  const tagList = [...tagSet].sort();

  return (
    <div className="blog-tag-filter-container">
      {tagList &&
        tagList.map((tag, index) => {
          const isSelected = selectedTag === tag ? 'active' : '';
          return (
            <button
              className={`blog-tag blog-tag-filter ${isSelected}`}
              value={tag}
              onClick={onClick}
              key={index}
            >
              {tag}
            </button>
          );
        })}
    </div>
  );
};

interface BlogListProps {
  timeToRead: number;
  frontmatter: FrontMatter;
  html: string
}

const BlogList = ({ timeToRead, frontmatter, html }: BlogListProps) => {
  const htmlText = parse(html);

  return (
    <div className="blog-list-item-wrapper">
      <Link to={'/blog/' + frontmatter.slug}>
        <p className="blog-title ">{frontmatter.title}</p>
      </Link>
      <div className="blog-date-container">
        <BlogDateIcon date={frontmatter.date} />
        <BlogTimeIcon timeToRead={timeToRead} />
      </div>
      <div className="blog-tag-container">
        {frontmatter?.tags?.map((tag, index) => (
          <span key={index} className="blog-tag">
            {tag}
          </span>
        ))}
      </div>
      {htmlText instanceof Array && htmlText.length > 0 && (
        <div className="blog-content-preview">
          {htmlText[0]}
          <Link to={'/blog/' + frontmatter.slug}>
            <p>Read more...</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogListPage;
