import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="container">
        <h2 className="section-heading">
          Search through more than 11 million social media profiles
        </h2>
        <p className="section-sub-heading">
          Heepsy’s search filters help you find exactly what you’re looking for,
          and our influencer reports provide you with the metrics
        </p>
        <div className="stats-number">
          <div className="stats-item">
            <span>2260</span>
            <p>Satisfied Brands</p>
          </div>
          <div className="stats-item">
            <span>1324</span>
            <p>Satisfied Clients</p>
          </div>
          <div className="stats-item">
            <span>3453</span>
            <p>Sponsored</p>
          </div>
          <div className="stats-item">
            <span>9786</span>
            <p>Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
