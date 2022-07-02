import styled from '@emotion/styled';
import { NextPage } from 'next';

const GalleryToggle: NextPage = () => {
  return (
    <ToggleNav>
      <ExhibitionBtn>성과전시회</ExhibitionBtn>
      <GalleryBtn>갤러리</GalleryBtn>
    </ToggleNav>
  );
};

const ExhibitionBtn = styled.button`
  background-color: #002e63;
  /* width: 200px; */
  border: none;
  color: white;
  font-size: 26px;
  padding: 0 50px;
  margin: 0;
  height: 60px;
  border-radius: 20px 20px 0 0;
`;

const GalleryBtn = styled(ExhibitionBtn)`
  background-color: #87a4c5;
`;

const ToggleNav = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  top: -60px;
`;

export default GalleryToggle;
