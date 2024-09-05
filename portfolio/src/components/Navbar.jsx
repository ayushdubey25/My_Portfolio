import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-transparent sticky-top"
        style={{ zIndex: "4" }}
      >
        <Link
          className="navbar-brand"
          style={{ color: "white", marginLeft: "12px" }}
        >
          Portfolio
        </Link>

        <div className="navbar-nav ayunav">
          <Link className="nav-item nav-link text" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link text" to="/about">
            About
          </Link>
          <Link className="nav-item nav-link text" to="/skills">
            Skills
          </Link>
          <Link className="nav-item nav-link text" to="/projects">
            Projects
          </Link>
          <Link className="nav-item nav-link text" to="/contacts">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};
