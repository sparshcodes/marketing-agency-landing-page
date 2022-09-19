import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-nav">
          <img class="logo" src="./assets/logo-black.svg" alt="" />
          <Navbar color="#333" />
          <div className="social-media-list">
            <a href="#">
              <img src="./assets/facebook-logo.svg" alt="" />
            </a>
            <a href="#">
              <img src="./assets/insta-logo.svg" alt="" />
            </a>
            <a href="#">
              <img src="./assets/yt-logo.svg" alt="" />
            </a>
          </div>
        </div>
        <hr />
        <p className="copyright-text">
          Design By <a href="https://www.uihut.com/home"> UIHUT</a>, Coded By
          <a href="https://www.instagram.com/sparshcodes/?hl=en">
            @sparshcodes
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
