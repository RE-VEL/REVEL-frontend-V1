import { NextPage } from 'next';
import { sliderSetting } from '../../interface/sliderSetting';
import AboutClubView from './aboutClubView';

const AboutClub: NextPage = () => {
  const settings: sliderSetting = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,

    // centerMode: true,
    // centerPadding: "200px",
  };

  const cards = [
    {
      id: 1,
      clubName: 'Reverie',
      tags: [
        '전공동아리운영위원회전공동아리운영위원회전공동아리운영위원회전공동아리운영위원회',
        '자율동아리',
      ],
      banner: '/img/banner.png',
      icon: '/img/icon.png',
    },
    {
      id: 2,
      clubName: 'Reverie',
      tags: ['전공동아리운영위원회', '자율동아리'],
      banner: '/img/banner.png',
      icon: '/img/icon.png',
    },
    {
      id: 2,
      clubName: 'Reverie',
      tags: ['전공동아리운영위원회', '자율동아리'],
      banner: '/img/banner.png',
      icon: '/img/icon.png',
    },
    {
      id: 2,
      clubName: 'Reverie',
      tags: ['전공동아리운영위원회', '자율동아리'],
      banner: '/img/banner.png',
      icon: '/img/icon.png',
    },
    {
      id: 2,
      clubName: 'Reverie',
      tags: ['전공동아리운영위원회', '자율동아리'],
      banner: '/img/banner.png',
      icon: '/img/icon.png',
    },
  ];

  const props = {
    settings,
    cards,
  };
  return <AboutClubView {...props} />;
};

export default AboutClub;
