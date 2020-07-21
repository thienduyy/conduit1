import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <nav>
          <div className="nav-brand">
            <NavLink to="/">
              <span>conduit</span>
            </NavLink>
          </div>
          <div className="nav-right">
            <ul className="nav-list">
              <li className="nav-items">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="nav-items">
                <NavLink to="/signin">Sign in</NavLink>
              </li>
              <li className="nav-items">
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Navbar;
