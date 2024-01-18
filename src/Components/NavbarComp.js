import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        {/* <img src={logo} alt="" /> */}
        <p>PurpleMajestry</p>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Shop</li>
        <li>Menus</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
