import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="container">
      <div className="cta-container">
        <div className="cta-left">
          <h1>
            tell a better <br />
            brand story
          </h1>
          <p>
            Automate the way you search through hashtags and suggested profiles
            to find results 100x faster.
          </p>
          <a className="btn btn-primary">
            request demon <img src="./assets/arrow-right.svg" alt="" />
          </a>
        </div>
        <div className="cta-right">
          <img src="./assets/hdr_ig_mrktng_img1.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
