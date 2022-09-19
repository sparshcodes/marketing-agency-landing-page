import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="container">
      <div className="services">
        <h2 className="section-heading">solutions for every need</h2>
        <p className="section-sub-heading">
          join thousands of marketers and entrepreneurs for a 2-day event at the
          forefront of social commerce
        </p>
        <div className="services-list">
          <div className="service-item">
            <div className="si-details">
              <span>Influencer</span>
              <div className="service-name">Influencer marketing</div>
              <div className="service-details">
                <p>
                  create infinite pieces of content with our influencer product.
                  Build,streamline,manage large-scale influencer programs
                </p>
              </div>
              <div className="lm-btn">
                learn more
                <img src="./assets/arrow-right-black.svg" alt="" />
              </div>
            </div>
            <div className="si-img">
              <img src="./assets/card-without-shadow.svg" alt="" />
            </div>
          </div>
          <div className="service-item">
            <div className="si-img">
              <img src="./assets/profile-without-shadow.svg" alt="" />
            </div>
            <div className="si-details">
              <span>community</span>
              <div className="service-name">Community marketing</div>
              <div className="service-details">
                <p>
                  Bring your relationships to new heights with our community
                  product. Discover your biggest enthusiasts
                </p>
              </div>
              <div className="lm-btn">
                learn more
                <img src="./assets/arrow-right-black.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="si-details">
              <span>services</span>
              <div className="service-name">Managed services</div>
              <div className="service-details">
                <p>
                  Our full-service solution lets our experts do the heavy
                  lifting to optimize your community for brand building and
                  storytelling
                </p>
              </div>
              <a className="lm-btn">
                learn more
                <img src="./assets/arrow-right-black.svg" alt="" />
              </a>
            </div>
            <div className="si-img">
              <img src="./assets/platform-without-shadow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
