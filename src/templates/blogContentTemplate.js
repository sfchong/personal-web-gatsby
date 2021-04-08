import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="site-wrapper">
      <Header />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>
          {frontmatter.date} ({frontmatter.fromNow})
        </h2>
        <p>{frontmatter.tags.join()}</p>
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
