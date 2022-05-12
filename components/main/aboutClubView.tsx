import styled from '@emotion/styled';
import { NextPage } from 'next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderSetting } from '../../interface/sliderSetting';
import { card } from '../../interface/card';
import Card from '../card/card';

interface props {
  settings: sliderSetting;
  cards: card[];
}

const AboutClubView: NextPage<props> = ({ settings, cards }: props) => {
  return (
    <div>
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
    </div>
  );
};

const TitleContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-left: 150px;
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
  .slick-slide div {
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
  }

  width: 1000px;
`;

export default AboutClubView;
