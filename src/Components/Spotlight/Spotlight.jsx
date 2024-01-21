import React from "react";
import "./Spotlight.css";
import image_1192 from "../Assets/1192.jpg";
import image_1113 from "../Assets/1113.jpg";
import image_1164 from "../Assets/1164.jpg";
import image_1162 from "../Assets/1162.jpg";
import image_1116 from "../Assets/1116.jpg";
import image_1147 from "../Assets/1147.jpg";
import image_1165 from "../Assets/1165.jpg";
import image_1146 from "../Assets/1146.jpg";

const Spotlight = () => {
  return (
    <>
      <div className="spotlight">
        <div className="spotlight-title">
          <h2>IN THE SPOTLIGHT</h2>
        </div>
        <div className="spotlight-1192_image">
          <img src={image_1192} alt="Home" />
          <p>WOMEN MULTI COLOR KURTA...</p>
          <div className="price-container">
            <span className="original-price">₹1799</span>
            <span className="discounted-price">₹799</span>
            <span className="discounted-label">50% off</span>
          </div>
        </div>
        <div className="spotlight-1113_image">
          <img src={image_1113} alt="Home" />
          <p>WOMEN MAROON ORIGINAL BATIK...</p>
          <div className="price-container">
            <span className="original-price">₹2999</span>
            <span className="discounted-price">₹1349</span>
            <span className="discounted-label">55% off</span>
          </div>
        </div>
        <div className="spotlight-1164_image">
          <img src={image_1164} alt="Home" />
          <p>WOMEN MAGENTA HANDWORK...</p>
          <div className="price-container">
            <span className="original-price">₹3099</span>
            <span className="discounted-price">₹1399</span>
            <span className="discounted-label">54% off</span>
          </div>
        </div>
        <div className="spotlight-1162_image">
          <img src={image_1162} alt="Home" />
          <p>WOMEN PINK HANDWORK...</p>
          <div className="price-container">
            <span className="original-price">₹3099</span>
            <span className="discounted-price">₹1399</span>
            <span className="discounted-label">54% off</span>
          </div>
        </div>
        <div className="spotlight-1116_image">
          <img src={image_1116} alt="Home" />
          <p>WOMEN TEAL ORIGINAL BATIK...</p>
          <div className="price-container">
            <span className="original-price">₹2999</span>
            <span className="discounted-price">₹1349</span>
            <span className="discounted-label">55% off</span>
          </div>
        </div>
        <div className="spotlight-1147_image">
          <img src={image_1147} alt="Home" />
          <p>WOMEN TEAL ETHNIC MOTIFS...</p>
          <div className="price-container">
            <span className="original-price">₹2799</span>
            <span className="discounted-price">₹1249</span>
            <span className="discounted-label">55% off</span>
          </div>
        </div>
        <div className="spotlight-1165_image">
          <img src={image_1165} alt="Home" />
          <p>WOMEN MULTI COLOR HAND...</p>
          <div className="price-container">
            <span className="original-price">₹3099</span>
            <span className="discounted-price">₹1399</span>
            <span className="discounted-label">54% off</span>
          </div>
        </div>
        <div className="spotlight-1146_image">
          <img src={image_1146} alt="Home" />
          <p>WOMEN PINK ETHNIC MOTIFS EM...</p>
          <div className="price-container">
            <span className="original-price">₹2799</span>
            <span className="discounted-price">₹1249</span>
            <span className="discounted-label">55% off</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spotlight;
