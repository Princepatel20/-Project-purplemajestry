// Hero.js

import React from "react";
import "./Hero.css";

// Import image
import heroImage from "../Assets/1208.jpg";

const Hero = () => {
  return (<>
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>

        <div>
          <h2>ETHNIC SUIT SET</h2>
        </div>
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
