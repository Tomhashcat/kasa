import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/images/LOGOdark.png';
import "./_Footer.scss";
const LogoImg = styled.img``;

function Footer() {
    return(
        <footer>
        <LogoImg src={logoImage}></LogoImg>
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default  Footer;