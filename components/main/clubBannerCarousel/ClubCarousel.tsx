import styled from '@emotion/styled';
import { NextPage } from 'next';
import Slider from 'react-slick';
import { sliderSetting } from '../../../interface/sliderSetting';

const settings: sliderSetting = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
};

const testBanner = [
  '/img/banner/t1.jpg',
  '/img/banner/t2.jpeg',
  '/img/banner/t3.jpeg',
  '/img/banner/t4.jpeg',
  '/img/banner/t5.jpeg',
];

const ClubBannerCarousel: NextPage = () => {
  return (
    <BannerCarouselSection>
      <StyledSlider {...settings}>
        {testBanner.map((bannerImg, i) => (
          <Banner key={i} src={bannerImg} />
        ))}
      </StyledSlider>
    </BannerCarouselSection>
  );
};

const BannerCarouselSection = styled.section`
  width: 100vw;
  height: 100vh;

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
export default ClubBannerCarousel;
