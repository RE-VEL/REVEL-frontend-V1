import styled from '@emotion/styled';
import { NextPage } from 'next';
import { RefObject } from 'react';
import Slider from 'react-slick';
import { sliderSetting } from '../../../interface/sliderSetting';

interface props {
  settings: sliderSetting;
  testBanner: string[];
  prevEvent: () => void;
  nextEvent: () => void;
  slickRef: RefObject<Slider>;
}

const ClubCarouselView: NextPage<props> = ({
  settings,
  testBanner,
  prevEvent,
  nextEvent,
  slickRef,
}: props) => {
  return (
    <BannerCarouselSection>
      <StyledSlider ref={slickRef} {...settings}>
        {testBanner.map((bannerImg, i) => (
          <Banner key={i} src={bannerImg} />
        ))}
      </StyledSlider>
      <NextBtn onClick={nextEvent}></NextBtn>
      <PrevBtn onClick={prevEvent}></PrevBtn>
    </BannerCarouselSection>
  );
};

const BannerCarouselSection = styled.section`
  width: 100vw;
  height: 47vw;
  position: relative;

  padding-top: 80px;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  & div {
    width: 100%;
    height: 100%;
  }
`;

const Banner = styled.div`
  background-image: url(${({ src }: { src: string }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const NextBtn = styled.button`
  border: none;
  position: absolute;
  top: 50%;
  right: 30px;
  background-color: transparent;
  cursor: pointer;
  width: 40px;
  height: 50px;
  padding: 0;

  background-image: url('/img/nextBtn.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PrevBtn = styled(NextBtn)`
  transform: rotate(180deg);
  right: 0;
  left: 30px;
`;

export default ClubCarouselView;
