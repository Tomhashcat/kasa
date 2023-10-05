import ImageBannerHome from '../../assets/Mask-Group.png';
import React from 'react';
import styled from 'styled-components';
import "./Banner.scss";
const DivBanner = styled.div`
`;
const Image = styled.img`
  
`;

function BannerHome() {
  return (
    <div className="Banner">
      <DivBanner className="Banner-Home">
        <Image src={ImageBannerHome} alt="Banner Home" />
       
      </DivBanner> 
      <p className="Text-Banner">Chez vous, partout et ailleurs</p>
    </div>
  );
}
export default BannerHome;
