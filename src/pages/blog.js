import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        timeToRead
        fileAbsolutePath
        frontmatter {
          slug
          title
          date(formatString: "D MMM YYYY")
          fromNow: date(fromNow: true)
          tags
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <div>
      <title>Blog</title>
      <Header />

      <div className="site-wrapper">
        {data.allMarkdownRemark.nodes.map(({ timeToRead, frontmatter }) => (
          <div>
            <Link to={"/blog/" + frontmatter.slug}>{frontmatter.title}</Link>
            <p>{timeToRead} min read</p>
            <p>
              {frontmatter.date} ({frontmatter.fromNow})
            </p>
            <p>{frontmatter.tags.join()}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Blog
