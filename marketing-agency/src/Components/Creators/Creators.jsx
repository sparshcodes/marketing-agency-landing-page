import React from "react";
import "./Creators.css";

const Creators = () => {
  return (
    <div className="creators">
      <div className="container">
        <h2 className="section-heading">solutions for every need</h2>
        <p className="section-sub-heading">
          join thousands of marketers and entrepreneurs for a 2-day event at the
          forefront of social commerce
        </p>
        <div className="creators-list">
          <div className="creator-item">
            <img src="./assets/creator-image1.png" alt="" />
            <div className="creator-details">
              <span>rebel clothing</span>
              <div className="reach-container">
                <div className="reach-item">
                  <span>6.7 M</span>
                  <span>follower reach</span>
                </div>
                <div className="reach-item">
                  <span>56.2 K</span>
                  <span>engagement</span>
                </div>
              </div>
              <a className="lm-btn">
                learn more
                <img src="./assets/arrow-right-pink.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="creator-item">
            <img src="./assets/creator-image2.png" alt="" />
            <div className="creator-details">
              <span>rebel clothing</span>
              <div className="reach-container">
                <div className="reach-item">
                  <span>6.7 M</span>
                  <span>follower reach</span>
                </div>
                <div className="reach-item">
                  <span>56.2 K</span>
                  <span>engagement</span>
                </div>
              </div>
              <a className="lm-btn">
                learn more
                <img src="./assets/arrow-right-pink.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="creator-item">
            <img src="./assets/creator-image3.png" alt="" />
            <div className="creator-details">
              <span>rebel clothing</span>
              <div className="reach-container">
                <div className="reach-item">
                  <span>6.7 M</span>
                  <span>follower reach</span>
                </div>
                <div className="reach-item">
                  <span>56.2 K</span>
                  <span>engagement</span>
                </div>
              </div>
              <a className="lm-btn">
                learn more
                <img src="./assets/arrow-right-pink.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;
