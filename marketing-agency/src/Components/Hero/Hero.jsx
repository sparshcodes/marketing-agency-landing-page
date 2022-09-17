import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import CTA from "../CTA/CTA";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-bg"></div>
        <Header />
        <CTA />
    </div>
  );
};

export default Hero;
