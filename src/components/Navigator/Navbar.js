import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a className="navbar-link" href="/">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="/characters">
            Characters
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
