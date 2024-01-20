import React from 'react'
import "./Shop.css"
import image_1192 from "../Components/Assets/1192.jpg"


const Shop = () => {
  return (<>
  <div className="shop">
    <div className="shop-title">
    <h2>IN THE SPOTLIGHT</h2>
    </div>
    <div className="shop-1192_image">
    <img src={image_1192} alt="Shop " />
    <h4>WOMEN MULTI COLOR KURTA...</h4>
    </div>
  </div>
  </>
  )
}

export default Shop
