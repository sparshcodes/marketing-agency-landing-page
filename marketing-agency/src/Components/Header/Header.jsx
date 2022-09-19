import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const hamburgerRef = useRef();

  return (
    <div className="container">
      <header className="header">
        <img class="logo" src="./assets/hdr_ig_mrktng_logo.svg" alt="" />
        <div className="header-nav">
          <div
            ref={hamburgerRef}
            className="hamburger"
            onClick={(e) => {
              hamburgerRef.current.classList.toggle("show");
            }}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <nav className="navigation-wrapper">
            <Navbar color="#fff" />
            <a href="#" className="btn btn-secondary mobile-btn">
              Request Demons
            </a>
          </nav>
        </div>
        <a href="#" className="btn btn-secondary desktop-btn">
          Request Demons
        </a>
      </header>
    </div>
  );
};

export default Header;
