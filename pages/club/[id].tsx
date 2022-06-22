import styled from '@emotion/styled';
import { NextPage } from 'next';
import ClubInfo from '../../components/clubDetail/clubInfo';
import Gallery from '../../components/clubDetail/gallery/gallery';

const Club: NextPage = () => {
  return (
    <ClubPage>
      <ClubInfo />
      <Gallery />
    </ClubPage>
  );
};

const ClubPage = styled.main`
  width: 100vw;
  height: fit-content;
`;

export default Club;
