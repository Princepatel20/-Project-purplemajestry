import React from "react";
import "./Shop.css";
import image_1192 from "../Components/Assets/1192.jpg";
import image_1113 from "../Components/Assets/1113.jpg";
import image_1164 from "../Components/Assets/1164.jpg";

const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="shop-title">
          <h2>IN THE SPOTLIGHT</h2>
        </div>
        <div className="shop-1192_image">
          <img src={image_1192} alt="Shop " />
          <p>WOMEN MULTI COLOR KURTA...</p>
          <div className="price-container">
            <span className="original-price">₹1799</span>
            <span className="discounted-price">₹799</span>
            <span className="discounted-label">50% off</span>
          </div>
        </div>
        <div className="shop-1113_image">
          <img src={image_1113} alt="Shop" />
          <p>WOMEN MAROON ORIGINAL BATIK...</p>
          <div className="price-container">
            <span className="original-price">₹2999</span>
            <span className="discounted-price">₹1349</span>
            <span className="discounted-label">55% off</span>
          </div>
        </div>
        <div className="shop-1164_image">
          <img src={image_1164} alt="Shop" />
          <p>WOMEN MAGENTA HANDWORK...</p>
          <div className="price-container">
            <span className="original-price">₹3099</span>
            <span className="discounted-price">₹1399</span>
            <span className="discounted-label">54% off</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
