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
  let htmlText = new DOMParser().parseFromString(html, "text/html")
    .documentElement.textContent
  htmlText = shortenHtmlString(htmlText, 250)

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
      <div className="blog-content-preview">{htmlText}</div>
    </div>
  )
}

function shortenHtmlString(str, maxLen, separator = " ") {
  if (str.length <= maxLen) return str
  return str.substr(0, str.lastIndexOf(separator, maxLen)) + " ..."
}
