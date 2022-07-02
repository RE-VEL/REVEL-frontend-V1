import styled from '@emotion/styled';
import { NextPage } from 'next';
import Background from '../background/background';

const GallerySection: NextPage = () => {
  return (
    <GalleryWrap>
      <GalleryCantainer>
        <Background />
      </GalleryCantainer>
    </GalleryWrap>
  );
};

const GalleryWrap = styled.div`
  background-color: #87a4c5;
  height: 100%;
  width: 100%;
  padding: 12px;
`;

const GalleryCantainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export default GallerySection;
