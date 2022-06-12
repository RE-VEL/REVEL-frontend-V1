import styled from '@emotion/styled';
import { NextPage } from 'next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { card } from '../interface/card';
import Card from '../components/card/card';
import { useState } from 'react';
import { css } from '@emotion/react';

const cards = [
  {
    id: 1,
    clubName: 'Reverie0',
    tags: [
      '전공동아리운영위원회전공동아리운영위원회전공동아리운영위원회전공동아리운영위원회',
      '자율동아리',
    ],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 2,
    clubName: 'Reverie1',
    tags: ['전공동아리운영위원회', '자율동아리'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 3,
    clubName: 'Reverie2',
    tags: ['전공동아리운영위원회', '자율동아리'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 4,
    clubName: 'Reverie3',
    tags: ['전공동아리운영위원회', '자율동아리'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 5,
    clubName: 'Reverie4',
    tags: ['전공동아리운영위원회', '자율동아리'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 6,
    clubName: 'Reverie5',
    tags: ['전공동아리운영위원회', '자율동아리'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 7,
    clubName: 'Reverie6',
    tags: ['전공동아리운영위원회', '자율동아리'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 8,
    clubName: 'Reverie7',
    tags: ['전공동아리운영위원회', '자율동아리'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 9,
    clubName: 'Reverie8',
    tags: ['전공동아리운영위원회', '자율동아리'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
];

const ClubClassification = () => {
  const [scrollNum, setScrollNum] = useState<number>(0);

  const preClub = () => {
    if (scrollNum) {
      setScrollNum((pre) => pre - 4);
    }
  };

  const nextClub = () => {
    if (Math.floor(cards.length / 4) !== scrollNum) {
      setScrollNum((pre) => pre + 4);
    }
  };

  return (
    <MyPage>
      <form action="">
        <ClubSel>
          <option value="Major" selected>
            전공동아리(자율)
          </option>
          <option value="creative">창체동아리</option>
          <option value="autonomy">자율동아리</option>
        </ClubSel>
        <ClubSel>
          <option value="back" selected>
            back-end
          </option>
          <option value="front">front-end</option>
          <option value="android">android</option>
          <option value="ios">ios</option>
          <option value="AI">AI</option>
          <option value="security">security</option>
        </ClubSel>
        <ClubSel>
          <option value="Recruitment">모집중</option>
          <option value="EndOfRecruitment">모집완료</option>
        </ClubSel>
      </form>
      <InfoWraper>
        WEB ______________________________________________________
      </InfoWraper>
      <div>
        <MyClub>
          {cards.slice(scrollNum * 4, scrollNum * 4 + 4).map((card: card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </MyClub>
      </div>
    </MyPage>
  );
};

const ClubSel = styled.select`
  width: 200px;
  height: 40px;
  padding: 10px;
  margin-left: 140px;
  margin-top: 30px;
  margin-bottom: 0px;
`;

const MyClub = styled.div`
  width: 1165px;
  height: 410px;
  display: flex;
  gap: 20px;
  position: relative;

  overflow: hidden;
`;

const MyPage = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  padding: 10vh 12vw;
  gap: 50px;
  grid-template-rows: repeat(2, 1fr);
`;

const InfoWraper = styled.div`
  display: grid;
  align-items: flex-end;
  position: relative;
  font-size: 3vw;
`;

export default ClubClassification;
