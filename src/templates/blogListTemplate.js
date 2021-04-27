import * as React from "react"
import { Link } from "gatsby"
import {
  BlogDateIcon,
  BlogHistoryIcon,
  BlogTimeIcon,
} from "../components/blogIcon"
import parse from "html-react-parser"
import * as JsSearch from "js-search"
import Seo from "../components/seo"

const BlogListPage = ({ pageContext }) => {
  const [search, setSearch] = React.useState(null)
  const [term, setTerm] = React.useState("")
  const [queryResult, setQueryResult] = React.useState([])

  const searchEvent = (e) => {
    const searchTerm = e.target.value
    const result =
      searchTerm === "" ? pageContext.nodes : search.search(searchTerm)

    setTerm(searchTerm)
    setQueryResult(result)
  }

  React.useEffect(() => {
    const blogs = pageContext.nodes
    const jsSearch = new JsSearch.Search("id")

    jsSearch.addIndex(["frontmatter", "title"])
    jsSearch.addDocuments(blogs)

    setSearch(jsSearch)
    setQueryResult(blogs)
  }, [pageContext])

  return (
    <div className="content-wrapper">
      <Seo title="Blog" description="This a my blog." url="blog" />
      <section className="blog-list-wrapper">
        <input
          className="blog-search-textbox"
          id="Search"
          value={term}
          onChange={searchEvent}
          placeholder="Search blog posts..."
          autoComplete="off"
        />
        {queryResult?.map(({ id, html, timeToRead, frontmatter }) => (
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

export default BlogListPage
