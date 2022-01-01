import React from 'react';
import { Link } from 'gatsby';
import { FaSun, FaRegMoon } from 'react-icons/fa';

interface Props {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleDarkMode, darkMode }: Props) => (
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
