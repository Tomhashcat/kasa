import ImageBannerHome from '../../../assets/Mask-Group.png';
import React from 'react';
import styled from 'styled-components';

const DivBanner = styled.div``;
const Image = styled.img`
  width: 100%; /* Ajoutez une largeur pour l'image */
`;

function BannerHome() {
  return (
    <DivBanner>
      <Image src={ImageBannerHome} alt="Banner Home" />
    </DivBanner>
  );
}
export default BannerHome;
