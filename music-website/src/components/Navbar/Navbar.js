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
        <nav className="navbar">
          <div className="nav-container">
            <NavLink to="/">home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/live">live</NavLink>
            <NavLink to="/shop">merch</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
