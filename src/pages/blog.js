import * as React from "react"
import { graphql, Link } from "gatsby"
import {
  BlogDateIcon,
  BlogHistoryIcon,
  BlogTimeIcon,
} from "../components/blogIcon"

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { slug: { ne: null } } }
    ) {
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
    <div className="content-wrapper">
      <title>Blog</title>
      <section className="blog-list-wrapper">
        {data?.allMarkdownRemark?.nodes?.map(
          ({ id, timeToRead, frontmatter }) => (
            <BlogList
              key={id}
              timeToRead={timeToRead}
              frontmatter={frontmatter}
            />
          )
        )}
      </section>
    </div>
  )
}

const BlogList = ({ timeToRead, frontmatter }) => {
  return (
    <div className="blog-list-item-wrapper box">
      <Link to={"/blog/" + frontmatter.slug}>
        <h2 className="blog-title ">{frontmatter.title}</h2>
      </Link>
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
  )
}

export default Blog
