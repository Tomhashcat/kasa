import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoImage from '../../assets/images/LOGO.jpg';
import "./Header.scss";


import { useState, useEffect } from 'react';


function Header() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <header>
      <img src={logoImage} alt="Logo"></img>
      <nav>
        <Link to="/" className={currentPath === '/' ? 'active' : ''}>ACCEUIL</Link>
        <Link to="/Apropos" className={currentPath === '/Apropos' ? 'active' : ''}>A PROPOS</Link>
      </nav>
    </header>
  );
}

export default Header;

