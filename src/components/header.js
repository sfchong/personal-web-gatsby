import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-content">
          <Link className="nav-home" to="/">
            Adrian Chong
          </Link>
          <ul>
            <li key="1">
              <Link to="/">Home</Link>
            </li>
            <li key="2">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
