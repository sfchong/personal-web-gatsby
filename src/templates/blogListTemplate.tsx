import React, { useEffect, useState } from 'react';
import { Search } from 'js-search';
import { Node } from 'types/markdown';
import TagList from 'components/tagList';
import BlogList from 'components/blogList';
import Seo from '../components/seo';

interface BlogListPageProps {
  pageContext: {
    nodes: Node[];
  };
}

const BlogListPage = ({ pageContext }: BlogListPageProps) => {
  const { nodes } = pageContext;

  const [search, setSearch] = useState<Search>();
  const [term, setTerm] = useState('');
  const [queryResult, setQueryResult] = useState<Node[]>([]);
  const [selectedTag, setSelectedTag] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    let result: Node[] =
      searchTerm === '' || !search
        ? nodes
        : (search.search(searchTerm) as Node[]);

    if (selectedTag) {
      result = result.filter((node: Node) =>
        node.frontmatter.tags.some((tag) => tag === selectedTag)
      );
    }

    setTerm(searchTerm);
    setQueryResult(result);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = (e.target as HTMLButtonElement).value;
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
    // Instantiate jsSearch
    const jsSearch = new Search('id');

    jsSearch.addIndex(['frontmatter', 'title']);
    jsSearch.addDocuments(nodes);

    setSearch(jsSearch);
    setQueryResult(nodes);
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

export default BlogListPage;
