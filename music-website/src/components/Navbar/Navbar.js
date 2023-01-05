import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="title-container">
        <NavLink to="/" className="title" activeclassname="active">
          <h1>GEORGE BOROWSKI</h1>
        </NavLink>
      </div>
      <div className="nav-container">
        <NavLink to="/" activeclassname="active">
          Bio
        </NavLink>
        <NavLink to="/" activeclassname="active">
          Live
        </NavLink>
        <NavLink to="/" activeclassname="active">
          Merch
        </NavLink>
        <NavLink to="/" activeclassname="active">
          Socials
        </NavLink>
      </div>
    </nav>
  );
}
