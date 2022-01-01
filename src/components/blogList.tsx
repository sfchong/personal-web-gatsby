import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
import { FrontMatter } from 'types/markdown';
import { BlogDateIcon, BlogTimeIcon } from './blogIcon';

interface BlogListProps {
  timeToRead: number;
  frontmatter: FrontMatter;
  html: string;
}

const BlogList = ({ timeToRead, frontmatter, html }: BlogListProps) => {
  const htmlText = parse(html);

  return (
    <div className="blog-list-item-wrapper">
      <Link to={`/blog/${frontmatter.slug}`}>
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
          <Link to={`/blog/${frontmatter.slug}`}>
            <p>Read more...</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogList;
