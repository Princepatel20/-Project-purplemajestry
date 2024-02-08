import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../Assets/purplemajestry.png';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className="navbar">
      {/* Wrap the logo with a Link component */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="nav-logo">
          <img src={logo} alt="Navbar" />
        </div>
      </Link>
      <ul className="nav-menu">
        <li onClick={() => { setMenu('home'); }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === 'home' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('Shop'); }}>
          <Link style={{ textDecoration: 'none' }} to='/Shop'>Shop</Link>
          {menu === 'Shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('menus'); }}>
          <Link style={{ textDecoration: 'none' }} to='/menus'>Menus</Link>
          {menu === 'menus' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('about'); }}>
          <Link style={{ textDecoration: 'none' }} to='/about'>About</Link>
          {menu === 'About' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('contact'); }}>
          <Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>
          {menu === 'contact' ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <li onClick={() => { setMenu('login'); }}>
          <Link style={{ textDecoration: 'none' }} to='/Login'>Login</Link>
          {menu === 'Login' ? <hr /> : <></>}
        </li>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
