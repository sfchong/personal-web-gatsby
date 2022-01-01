import React from 'react';
import { BlogDateIcon, BlogTimeIcon } from '../components/blogIcon';
import Seo from '../components/seo';
import { Link } from 'gatsby';
import { Node } from 'types/markdown';

interface Props {
  pageContext: {
    node: Node;
    prev: Node;
    next: Node
  }
}

export default function Template({ pageContext }: Props) {
  const { node, prev, next } = pageContext;
  const { frontmatter, html, timeToRead, excerpt } = node;

  return (
    <div className="content-wrapper">
      <Seo
        title={frontmatter.title}
        url={'blog/' + frontmatter.slug}
        description={excerpt}
      />
      <div className="blog-top-wrapper">
        <h1 className="blog-title">{frontmatter.title}</h1>
        <div className="blog-date-container">
          <BlogDateIcon date={frontmatter.date} />
          <BlogTimeIcon timeToRead={timeToRead} />
        </div>
        <div>
          {frontmatter?.tags?.map((tag, index) => (
            <span key={index} className="blog-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="blog-prev-next-container">
        {prev ? (
          <div className="box blog-prev-next-box">
            <div>&#8592; Previous</div>
            <Link to={'/blog/' + prev.frontmatter.slug}>
              {prev.frontmatter.title}
            </Link>
          </div>
        ) : (
          <div />
        )}
        {next ? (
          <div className="box blog-prev-next-box">
            <div>Next &#8594;</div>
            <Link to={'/blog/' + next.frontmatter.slug}>
              {next.frontmatter.title}
            </Link>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
