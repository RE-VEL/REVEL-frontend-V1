import styled from '@emotion/styled';
import { NextPage } from 'next';
import Slider from 'react-slick';
import { card } from '../../../interface/card';
import { sliderSetting } from '../../../interface/sliderSetting';
import Card from '../../card/card';

const settings: sliderSetting = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
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

const Carousel: NextPage = () => {
  return (
    <>
      <TitleContainer>
        <SectionTitle>
          <p>ABOUT</p>
          <p>DSM</p>
          <p>CLUBS</p>
        </SectionTitle>
        <SectionMessage>
          <p>학생 여러분들이 자유롭게 공부하고,</p>
          <p>다방면으로 성장할 수 았도록</p>
          <p>다양한 동아리가 여러분과 함께합니다</p>
        </SectionMessage>
      </TitleContainer>
      <StyledSlider {...settings}>
        {cards.map((card: card) => (
          <div key={card.id}>
            <Card card={card} />
          </div>
        ))}
      </StyledSlider>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-left: 150px;
  z-index: 3;
  margin-bottom: 50px;
`;

const SectionTitle = styled.div`
  p {
    font-weight: bold;
    color: #1d3178;
    font-size: 40px;
    margin: 0;
  }
`;

const SectionMessage = styled.div`
  p {
    color: #082d5e;
    font-size: 20px;
  }
`;

const StyledSlider = styled(Slider)`
  /* .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
  .slick-dots li {
    width: fit-content;
    height: fit-content;
    margin: 0;
  }
  .slick-dots li.slick-active span {
    filter: grayscale(0);
    transform: scale(1.3);
  } */

  width: 1000px;
  margin-left: 80px;
`;

export default Carousel;
