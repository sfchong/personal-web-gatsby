import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li key="1">
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li key="2">
              <Link to="/blog" activeClassName="active" partiallyActive={true}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
