import React from "react"
import { graphql } from "gatsby"
import {
  BlogDateIcon,
  BlogHistoryIcon,
  BlogTimeIcon,
} from "../components/blogIcon"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, timeToRead } = markdownRemark
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

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        slug
        title
        date(formatString: "D MMM YYYY")
        fromNow: date(fromNow: true)
        tags
      }
    }
  }
`
