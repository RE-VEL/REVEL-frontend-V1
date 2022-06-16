import styled from '@emotion/styled';
import { NextPage } from 'next';

const ClubInfo: NextPage = () => {
  return (
    <ClubInfoSection>
      <Banner></Banner>
    </ClubInfoSection>
  );
};

const Banner = styled.div`
  width: 100vw;
  height: 15vw;
  background-image: url('/img/banner/t1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const ClubInfoSection = styled.section`
  width: 100vw;
  height: 100vh;
`;

export default ClubInfo;
