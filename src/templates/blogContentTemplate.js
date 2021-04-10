import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import { FaRegCalendarAlt } from "react-icons/fa"
import { FaRegClock } from "react-icons/fa"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="site-wrapper">
      <title>{frontmatter.title}</title>
      <Header />
      <div className="content-wrapper">
        <div className="blog-top-wrapper">
          <h1 className="blog-title">{frontmatter.title}</h1>
          <div className="blog-date-container">
            <span className="blog-date">
              <FaRegCalendarAlt className="blog-icon" />
              <span>{frontmatter.date}</span>
            </span>
            <span>
              <FaRegClock className="blog-icon" />
              <span>{frontmatter.fromNow}</span>
            </span>
          </div>
          <div>
            {frontmatter.tags?.map((tag) => (
              <span className="blog-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Footer />
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
