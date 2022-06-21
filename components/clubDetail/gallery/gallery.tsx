import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useState } from 'react';
import ExhibitionSection from './exhibition/exhibitionSection';
import GallerySection from './gallery/gallerySection';
import GalleryToggle from './galleryToggle';

const Gallery: NextPage = () => {
  const [isShowExhibition, setIsShowExhibition] = useState<boolean>(false);
  return (
    <GalleryContainer>
      <GalleryToggle />
      {isShowExhibition ? <ExhibitionSection /> : <GallerySection />}
    </GalleryContainer>
  );
};

const GalleryContainer = styled.section`
  width: 100vw;
  height: 70vh;
  position: relative;
`;

export default Gallery;
