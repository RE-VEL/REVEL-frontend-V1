import styled from '@emotion/styled';
import { NextPage } from 'next';
import ClubInfo from '../../components/clubDetail/clubInfo';

const Club: NextPage = () => {
  return (
    <ClubPage>
      <ClubInfo />
    </ClubPage>
  );
};

const ClubPage = styled.main`
  width: 100vw;
  height: fit-content;
  padding-top: 80px;
`;

export default Club;
