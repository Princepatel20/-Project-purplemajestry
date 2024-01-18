import React from 'react'
import Item from './item.css'
import heroImage from "../Assets/1208.jpg";

const Item = () => {
  return (
    <div className="item">
      Item
      <div className="item-left">
         {/* Display image */}
        <img src={heroImage} alt="Hero " />
      </div>
    </div>
  )
}

export default Item
