import React from "react"
import { Link } from "gatsby"
import { FaSun, FaRegMoon } from "react-icons/fa"

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
            <li key="3">
              <button
                className="btn-theme-toggle"
                onClick={this.props.toggleDarkMode}
                aria-label="theme-toggle"
              >
                {this.props.darkMode ? <FaRegMoon /> : <FaSun />}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
