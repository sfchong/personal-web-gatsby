import React from "react"
import {
  BlogDateIcon,
  BlogHistoryIcon,
  BlogTimeIcon,
} from "../components/blogIcon"

export default function Template({ pageContext }) {
  const { frontmatter, html, timeToRead } = pageContext
  return (
    <div className="content-wrapper">
      <title>{frontmatter.title}</title>
      <div className="blog-top-wrapper">
        <h1 className="blog-title">{frontmatter.title}</h1>
        <div className="blog-date-container">
          <BlogDateIcon date={frontmatter.date} />
          <BlogHistoryIcon fromNow={frontmatter.fromNow} />
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
    </div>
  )
}
