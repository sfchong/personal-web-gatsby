import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-content">
          <Link className="nav-home" to="/">
            SF Chong
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
