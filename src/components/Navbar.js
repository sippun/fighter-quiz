import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <a className="nav-item" href="/#">
          <Link
            exact
            to="/"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Home
          </Link>
        </a>
        <a className="nav-item" href="/#">
          <Link
            exact
            to="/quiz"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Quiz
          </Link>
        </a>
        <a className="nav-item" href="/#">
          <Link
            exact
            to="/types"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Types
          </Link>
        </a>
        <a className="nav-item" href="/#">
          <Link
            exact
            to="/about"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            About
          </Link>
        </a>
        <a className="nav-item" href="/#">
          <Link
            exact
            to="/contact"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Contact
          </Link>
        </a>
      </nav>
    </>
  );
}

export default NavBar;