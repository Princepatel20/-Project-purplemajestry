// Hero.js

import React from "react";
import "./Hero.css";

// Import image
import heroImage from "../Assets/1208.jpg";

const Hero = () => {
  return (<>
    <div className="hero">
      <div className="hero-left">
        <h2>Exquisite Indian Ethnic Wear</h2>

        <div>
          <h4>PurpleMajestry - an exquisite ecommerce destination for elegant and stylish Indian ethnic wear. We offer breathtaking lehengas and magnificent kurtis that make fashion statements. Each outfit crafted to tell your unique story.</h4>
        </div>
      </div>
      <div className="hero-shop-btn">
        <div><h3>Shop New Arrivals →</h3></div>
      </div>

      <div className="hero-right">
         {/* Display image */}
        <img src={heroImage} alt="Hero " />
      </div>
    </div>
  </>
  );
};

export default Hero;
