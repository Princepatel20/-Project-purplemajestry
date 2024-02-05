import React from "react";
import "./Spotlight.css";
import data_product from "../Assets/data"; // Adjust the path accordingly

const Spotlight = () => {
  return (
    <>
      <div className="spotlight">
        <div className="spotlight-title">
          <h2>IN THE SPOTLIGHT</h2>
        </div>
        {data_product.map((product) => {
          if (product.id >= 1 && product.id <= 8) {
            return (
              <div className={`spotlight-${product.id}_image`} key={product.id}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <div className="price-container">
                  <span className="original-price">₹{product.old_price}</span>
                  <span className="discounted-price">₹{product.new_price}</span>
                  <span className="discounted-label">
                    {Math.floor(
                      ((product.old_price - product.new_price) /
                        product.old_price) *
                        100
                    )}
                    % off
                  </span>
                </div>
              </div>
            );
          } else {
            return null; // If you don't want to render anything for items outside the range
          }
        })}
      </div>
    </>
  );
};

export default Spotlight;
