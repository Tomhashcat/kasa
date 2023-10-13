import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import logoImage from '../../assets/images/LOGOdark.png';
import "./Footer.scss";
const LogoImg = styled.img``;

function Footer() {
    return(
        <footer>
        <LogoImg src={logoImage}></LogoImg>
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
Footer.propTypes = {
    logoImage: PropTypes.string,  //  (ici, une chaîne de caractères)
    someOtherProp: PropTypes.number,  // (ici, un nombre)
   
};
export default  Footer;