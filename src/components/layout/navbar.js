import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <nav>
          <div className="nav-brand">
            <span>conduit</span>
          </div>
          <div className="nav-right">
            <ul className="nav-list">
              <li className="nav-items">Home</li>
              <li className="nav-items">Sign in</li>
              <li className="nav-items">Sign up</li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Navbar;
