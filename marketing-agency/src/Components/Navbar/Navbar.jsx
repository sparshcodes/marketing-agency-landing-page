import React from "react";
import "./Navbar.css";

const Navbar = ({ color }) => {
  return (
      <ul className="navbar" style={{ "--color": `${color}` }}>
        <li className="nav-item">
          <a href="#">solution</a>
        </li>
        <li className="nav-item">
          <a href="#">plans</a>
        </li>
        <li className="nav-item">
          <a href="#">resource</a>
        </li>
        <li className="nav-item">
          <a href="#">blog</a>
        </li>
      </ul>

  );
};

export default Navbar;
