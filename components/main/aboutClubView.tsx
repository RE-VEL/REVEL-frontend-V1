import styled from '@emotion/styled';
import { NextPage } from 'next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderSetting } from '../../interface/sliderSetting';
import { card } from '../../interface/card';
import BackCircle from './BackCircle';
import Carousel from './Carousel';

const AboutClubView: NextPage = () => {
  return (
    <AboutClubSection>
      <BackCircle />
      <Carousel />
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
`;

export default AboutClubView;
