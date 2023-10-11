import ImageBannerHome from '../../assets/Mask-Group.png';
import React from 'react';
import styled from 'styled-components';
import "./Banner.scss";
import PropTypes from 'prop-types';

const DivBanner = styled.div`
`;
const Image = styled.img`
  
`;
const TextBanner = styled.p`
  
`;
function BannerHome({text}) {
  return (
    <div className="Banner">
      <DivBanner className="Banner-Home">
        <Image src={ImageBannerHome} alt="Banner Home" />
       
      </DivBanner> 
      <TextBanner>{text}</TextBanner>
    </div>
  );
}
BannerHome.propTypes = {
  text: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired
};
export default BannerHome;
