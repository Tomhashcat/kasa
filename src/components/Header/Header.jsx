import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/LOGO.jpg';
import "./Header.scss";




function Header() {
  return (
    <header>
      
      <img src={logoImage} alt="Logo"></img>
      <nav>
        <Link  to="/">ACCEUIL</Link>
        <Link to="/Apropos" >A PROPOS</Link>
      </nav>
    </header>
  );
}

export default Header;
