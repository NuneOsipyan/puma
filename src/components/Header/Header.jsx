import React from 'react';
import "./Header.css";
import logo from "./img/logo.jpg";

const Header = ({ scrollToSection, aboutRef, homeRef, contactRef, order_pop }) => {
  return (
    <div className='header_all'>
      <img src={logo} alt="logo" className='logo'/>
      <button onClick={() => scrollToSection(homeRef)} className='header_btn'>Home</button>
      <button onClick={() => scrollToSection(aboutRef)} className='header_btn'>About</button>
      <button onClick={() => scrollToSection(contactRef)} className='header_btn'>Contact us</button>
      <button onClick={order_pop} className='header_btn'>Order</button>
    </div>
  );
}

export default Header;
