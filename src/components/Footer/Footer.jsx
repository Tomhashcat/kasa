import React from 'react';

import PropTypes from 'prop-types';

import logoImage from '../../assets/images/LOGOdark.png';
import "./Footer.scss";


function Footer() {
    return(
        <footer>
        <img src={logoImage} alt="Logo"></img>
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
Footer.propTypes = {
    logoImage: PropTypes.string,  //  (ici, une chaîne de caractères)
    someOtherProp: PropTypes.number,  // (ici, un nombre)
   
};
export default  Footer;