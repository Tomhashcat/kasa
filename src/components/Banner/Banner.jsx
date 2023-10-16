import React from 'react';
import PropTypes from 'prop-types';
import ImageBannerHome from '../../assets/Mask-Group.png';

import './Banner.scss';

function BannerHome({ text, image }) {
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
  image: PropTypes.string,
};

export default BannerHome;
