import React, { useState } from "react";
import "./Testimonials.css";
import carouselData from "../../carouselData";

const Testimonials = () => {
  const [count, setCount] = useState(0);
  const handlePrev = () => {
    if (count == 0) {
      setCount(carouselData.length - 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (count == carouselData.length - 1) {
      setCount(0);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="testimonials">
      <div className="container">
        <img
          className="deco-quotes"
          src="./assets/double-quotes.svg"
          alt=""
        />
        <h2 className="section-heading">happy clients</h2>
        <p className="section-sub-heading">
          the Marketing Accountability Standards Board (MASB) endorses the
          definitions, purposes, and constructs of classes
        </p>
        <div className="testimonials-carousel">
          <div
            className="carousel-wrapper"
            style={{
              "--length": `${carouselData.length}`,
              transform: `translateX(${count * (-100 / carouselData.length)}%)`,
            }}
          >
            {carouselData.map((carouselItem) => {
              return (
                <div className="carousel-item">
                  <div className="ci-left">
                    <img
                      className="ci-left-logo"
                      src="./assets/client-profile.svg"
                      alt=""
                    />
                    <p className="ci-message">{carouselItem.message}</p>
                    <div className="customer-details">
                      <span className="ci-name">{carouselItem.name}</span>
                      <span className="ci-position">
                        {carouselItem.position}
                      </span>
                    </div>
                  </div>
                  <div className="ci-right">
                    <img
                      class="ci-right-deco"
                      src="./assets/shapes.svg"
                      alt=""
                    />
                    <img src={carouselItem.img} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="carousel-navigation-btn">
            <button className="prev-btn" onClick={handlePrev}>
              <img src="./assets/carousel-left-arrow.svg" alt="" />
            </button>
            <button className="next-btn" onClick={handleNext}>
              <img src="./assets/carousel-right-arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
