import * as React from "react"
import { Link } from "gatsby"
import {
  BlogDateIcon,
  BlogHistoryIcon,
  BlogTimeIcon,
} from "../components/blogIcon"

export default function Template({ pageContext }) {
  return (
    <div className="content-wrapper">
      <title>Blog</title>
      <section className="blog-list-wrapper">
        {pageContext.nodes?.map(({ id, timeToRead, frontmatter }) => (
          <BlogList
            key={id}
            timeToRead={timeToRead}
            frontmatter={frontmatter}
          />
        ))}
      </section>
    </div>
  )
}

const BlogList = ({ timeToRead, frontmatter }) => {
  return (
    <div className="blog-list-item-wrapper">
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
