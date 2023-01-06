import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="title-container">
        <NavLink to="/" className="title" activeclassname="active">
          <h1>GEORGE BOROWSKI</h1>
        </NavLink>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/">Bio</NavLink>
          <NavLink to="/live">Live</NavLink>
          <NavLink to="/home">Merch</NavLink>
          <NavLink to="/help">Socials</NavLink>
        </div>
      </nav>
    </header>
  );
}
