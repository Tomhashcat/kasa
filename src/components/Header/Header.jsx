import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/images/LOGO.jpg';
import "./_Header.scss";

const LogoImg = styled.img``;


function Header() {
  return (
    <header>
      <LogoImg src={logoImage}></LogoImg>
      <nav>
        <Link  to="/">ACCEUIL</Link>
        <Link to="/pages/APropos/APropos.jsx" >A PROPOS</Link>
      </nav>
    </header>
  );
}

export default Header;