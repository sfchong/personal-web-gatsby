import * as React from "react"
import { graphql, Link } from "gatsby"
import {
  BlogDateIcon,
  BlogHistoryIcon,
  BlogTimeIcon,
} from "../components/blogIcon"
import { Layout } from "../components/layout"

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
    <Layout title="Blog">
      {data?.allMarkdownRemark?.nodes?.map(
        ({ id, timeToRead, frontmatter }) => (
          <BlogList
            key={id}
            timeToRead={timeToRead}
            frontmatter={frontmatter}
          />
        )
      )}
    </Layout>
  )
}

const BlogList = ({ timeToRead, frontmatter }) => {
  return (
    <div>
      <Link to={"/blog/" + frontmatter.slug}>{frontmatter.title}</Link>
      <div className="">
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
