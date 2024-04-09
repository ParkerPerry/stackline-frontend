
import React from 'react';
import './Header.css'; 
import logo from './stackline_logo.svg';



const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Stackline Logo" className="header-logo" />
    </header>
  );
};

export default Header;
