import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="cyan lighten-5">
      <div className="nav-wrapper">
        <Link to="/" className="left black-text">
          <h5 style={{ margin: "15px" }}>Google Books</h5>
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link className="black-text" to="/search">
              Search
            </Link>
          </li>
          <li>
            <Link className="black-text" to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
