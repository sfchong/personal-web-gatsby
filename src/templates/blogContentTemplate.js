import React from "react"
import { BlogDateIcon, BlogTimeIcon } from "../components/blogIcon"
import Seo from "../components/seo"

export default function Template({ pageContext }) {
  const { frontmatter, html, timeToRead, excerpt } = pageContext

  return (
    <div className="content-wrapper">
      <Seo
        title={frontmatter.title}
        url={"blog/" + frontmatter.slug}
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
    </div>
  )
}
