import * as React from "react"
import { Link } from "gatsby"
import {
  BlogDateIcon,
  BlogHistoryIcon,
  BlogTimeIcon,
} from "../components/blogIcon"
import parse from "html-react-parser"

export default function Template({ pageContext }) {
  return (
    <div className="content-wrapper">
      <title>Blog</title>
      <section className="blog-list-wrapper">
        {pageContext.nodes?.map(({ id, html, timeToRead, frontmatter }) => (
          <BlogList
            key={id}
            timeToRead={timeToRead}
            frontmatter={frontmatter}
            html={html}
          />
        ))}
      </section>
    </div>
  )
}

const BlogList = ({ timeToRead, frontmatter, html }) => {
  const htmlText = parse(html)

  return (
    <div className="blog-list-item-wrapper">
      <Link to={"/blog/" + frontmatter.slug}>
        <p className="blog-title ">{frontmatter.title}</p>
      </Link>
      <div className="blog-date-container">
        <BlogDateIcon date={frontmatter.date} />
        <BlogHistoryIcon fromNow={frontmatter.fromNow} />
        <BlogTimeIcon timeToRead={timeToRead} />
      </div>
      <div className="blog-tag-container">
        {frontmatter?.tags?.map((tag, index) => (
          <span key={index} className="blog-tag">
            {tag}
          </span>
        ))}
      </div>
      {htmlText.length > 0 && (
        <div className="blog-content-preview">
          {htmlText[0]}
          <Link to={"/blog/" + frontmatter.slug}>
            <p>Read more...</p>
          </Link>
        </div>
      )}
    </div>
  )
}
