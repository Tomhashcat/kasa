import ImageBannerHome from '../../assets/Mask-Group.png';
import React from 'react';

import "./Banner.scss";
import PropTypes from 'prop-types';


function BannerHome({text}) {
  return (
    <div className="Banner">
      <div className="Banner-Home">
        <img src={ImageBannerHome} alt="Banner Home" />
       
      </div> 
      <p>{text}</p>
    </div>
  );
}
BannerHome.propTypes = {
  text: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired
};
export default BannerHome;
