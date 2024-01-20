import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

import logo from "../Assets/purplemajestry.png"
// import cart_icon from "../Assets/cart_icon.png"


const Navbar = () => {

  const [menu,setmenu] = useState("home");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Navbar" />
        
      </div>
      <ul className="nav-menu">
        <li on onClick={()=>{setmenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li on onClick={()=>{setmenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li on onClick={()=>{setmenu("menus")}}><Link style={{ textDecoration: 'none' }} to='/menus'>Menus</Link>{menu==="menus"?<hr/>:<></>}</li>
        <li on onClick={()=>{setmenu("about")}}><Link style={{ textDecoration: 'none' }} to='/about'>About</Link>{menu==="About"?<hr/>:<></>}</li>
        <li on onClick={()=>{setmenu("contact")}}><Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        {/* <img src={cart_icon} alt="Navbar" /> */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
