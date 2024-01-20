import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu,setmenu] = useState("home");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        {/* <img src={logo} alt="" /> */}
        <p>PurpleMajestry</p>
      </div>
      <ul className="nav-menu">
        <li on onClick={()=>{setmenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li on onClick={()=>{setmenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li on onClick={()=>{setmenu("menus")}}><Link to='/'>Menus</Link>{menu==="menus"?<hr/>:<></>}</li>
        <li on onClick={()=>{setmenu("about")}}><Link to='/'>About</Link>{menu==="About"?<hr/>:<></>}</li>
        <li on onClick={()=>{setmenu("contact")}}><Link to='/'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        {/* <img src={cart_icon} alt="" /> */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
