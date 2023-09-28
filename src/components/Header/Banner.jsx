import ImageBannerHome from '../../assets/Mask-Group.png';
import React from 'react';
import styled from 'styled-components';
import "./Banner.scss";
const DivBanner = styled.div`
margin-top:50px`;
const Image = styled.img`
  width: 100%; /* Ajoutez une largeur pour l'image */
`;

function BannerHome() {
  return (
    <DivBanner className="Banner-Home">
      <Image src={ImageBannerHome} alt="Banner Home" />
      <p className="Text-Banner">Chez vous, partout et ailleurs</p>
    </DivBanner>
  );
}
export default BannerHome;
