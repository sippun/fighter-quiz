import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <a className="nav-item">
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
        <a className="nav-item">
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
        <a className="nav-item">
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
        <a className="nav-item">
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
        <a className="nav-item">
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
          {/* <NavLink exact to="/" className="nav-logo">
            helo
            <i className="fas fa-code"></i>
          </NavLink>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div> */}
      </nav>
    </>
  );
}

export default NavBar;