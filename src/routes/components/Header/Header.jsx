import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../../assets/images/LOGO.jpg';

const StyledLink = styled(Link)`
  padding: 15px;
  color: #ff6060;
  font-family: Montserrat;
  text-decoration: none;
  font-size: 18px;

`;
const LogoImg = styled.img``;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoImg src={logoImage}></LogoImg>
      <nav>
        <StyledLink to="/">ACCEUIL</StyledLink>
        <StyledLink to="/">A PORPOS</StyledLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
