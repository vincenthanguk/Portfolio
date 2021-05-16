import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavBar-link">
          <NavLink exact activeClassName="active-link" to="/">
            Home
          </NavLink>
        </div>
        <div className="NavBar-link">
          <NavLink exact activeClassName="active-link" to="/projects">
            My Projects
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
