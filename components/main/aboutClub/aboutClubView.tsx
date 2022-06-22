import styled from '@emotion/styled';
import { NextPage } from 'next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BackCircle from './backCircle/BackCircle';
import Carousel from './carousel/Carousel';
import CategoryNavigator from './category/CategoryNavigator';

const AboutClubView: NextPage = () => {
  return (
    <AboutClubSection>
      <BackCircle />
      <Carousel />
      <CategoryNavigator />
    </AboutClubSection>
  );
};

const AboutClubSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export default AboutClubView;
