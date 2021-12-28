import React from 'react';
import { Link } from 'gatsby';
import { FaSun, FaRegMoon } from 'react-icons/fa';

const Header = ({ toggleDarkMode, darkMode }) => (
  <header>
    <nav>
      <ul>
        <li key="1">
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li key="2">
          <Link to="/blog" activeClassName="active" partiallyActive>
            Blog
          </Link>
        </li>
        <li key="3">
          <button
            className="btn-theme-toggle"
            onClick={toggleDarkMode}
            aria-label="theme-toggle"
            type="button"
          >
            {darkMode ? <FaRegMoon /> : <FaSun />}
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
