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
    tags: ['전공동아리운영위원회', '전공동아리(창체)'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 3,
    clubName: 'Reverie2',
    tags: ['전공동아리운영위원회', '창체동아리'],
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
    tags: ['전공동아리운영위원회', '창체동아리'],
    banner: '/img/banner.png',
    icon: '/img/icon.png',
  },
  {
    id: 6,
    clubName: 'Reverie5',
    tags: ['전공동아리운영위원회', '전공동아리(자율)'],
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

  return (
    <MyPage>
      <form action="">
        <ClubSel>
          <option value="Major">전공동아리(자율)</option>
          <option value="creative">창체동아리</option>
          <option value="autonomy">자율동아리</option>
        </ClubSel>
        <ClubSel>
          <option value="back">back-end</option>
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
      <span>
        <InfoWraper>WEB</InfoWraper>
        <Line></Line>
      </span>
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
  border-radius: 5px;
  color: #082d5f;
  border-color: #707070;
  outline: 1px;
  font-family: 나눔스퀘어라운드;
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
`;

const InfoWraper = styled.div`
  display: grid;
  align-items: flex-end;
  position: relative;
  font-size: 2vw;
  font-weight: bold;
  color: #082d5f;
  width: 7%;
  float: left;
`;

const Line = styled.p`
  color: #082d5f;
  border-bottom-style: solid;
  width: 93%;
  float: left;
  margin-top: 2.5%;
`;

export default ClubClassification;
