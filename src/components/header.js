import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-content">
          <a className="nav-home" href="#">
            SF Chong
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
