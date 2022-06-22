import { NextPage } from 'next';
import { useCallback, useRef } from 'react';
import Slider from 'react-slick';
import { sliderSetting } from '../../../interface/sliderSetting';
import ClubCarouselView from './ClubCarouselView';

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
  const slickRef = useRef<Slider>(null);

  const prevEvent = useCallback(() => {
    slickRef?.current?.slickPrev();
  }, []);

  const nextEvent = useCallback(() => {
    slickRef?.current?.slickNext();
  }, []);

  const props = {
    settings,
    testBanner,
    prevEvent,
    nextEvent,
    slickRef,
  };

  return <ClubCarouselView {...props} />;
};

export default ClubBannerCarousel;
