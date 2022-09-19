import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="container">
      <div className="newsletter">
        <h2 className="section-heading">solutions for every need</h2>
        <p className="section-sub-heading">
          join thousands of marketers and entrepreneurs for a 2-day event at the
          forefront of social commerce
        </p>
        <a className="btn btn-primary">
          subscribe <img src="./assets/arrow-right.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default NewsLetter;
