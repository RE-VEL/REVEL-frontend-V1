import styled from '@emotion/styled';
import { NextPage } from 'next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { card } from '../src/interface/card';
import Card from 'components/card/card';
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

const MyProfile: NextPage = () => {
  const [scrollNum, setScrollNum] = useState<number>(0);

  const preClub = () => {
    if (scrollNum) {
      setScrollNum((pre) => pre - 1);
    }
  };

  const nextClub = () => {
    if (Math.floor(cards.length / 4) !== scrollNum) {
      setScrollNum((pre) => pre + 1);
    }
  };

  return (
    <MyPage>
      <InfoWraper>
        <MyInfo>
          <Profile />
          <Border>
            <MyName>2301김순호</MyName>
          </Border>
        </MyInfo>
        <CreateClubBtn>동아리 생성</CreateClubBtn>
      </InfoWraper>
      <div>
        <MyClub>
          {cards.slice(scrollNum * 4, scrollNum * 4 + 4).map((card: card) => (
            <Card key={card.id} card={card}></Card>
          ))}
          <PrevBtn onClick={preClub} scrollNum={!!scrollNum} />
          <NextBtn
            onClick={nextClub}
            scrollNum={Math.floor(cards.length / 4) !== scrollNum}
          />
        </MyClub>
      </div>
    </MyPage>
  );
};

const NextBtn = styled.button`
  border: none;
  position: absolute;
  top: 50%;
  right: 10px;
  background-color: transparent;
  cursor: pointer;
  width: 40px;
  height: 50px;
  padding: 0;
  display: block;
  transform: translate(0, -50%);

  background-image: url('/img/nextBtn.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ scrollNum }: { scrollNum: boolean }) =>
    scrollNum ||
    css`
      display: none;
    `}
`;

const PrevBtn = styled(NextBtn)`
  transform: translate(0, -50%) rotate(180deg);
  right: 0;
  left: 10px;

  ${({ scrollNum }: { scrollNum: boolean }) =>
    scrollNum ||
    css`
      display: none;
    `}
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
  padding: 5vh 5vw;
  gap: 50px;
  grid-template-rows: repeat(2, 1fr);
`;

const InfoWraper = styled.div`
  display: grid;
  align-items: flex-end;
  position: relative;
`;

const MyInfo = styled.section`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Profile = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 50%;
`;

const MyName = styled.p`
  margin: 0;
  font-size: 60px;
  border-bottom: 2px solid black;
  padding: 0 150px 0 10px;
  margin-bottom: 18px;
`;

const Border = styled.div`
  margin: 0;
  font-size: 60px;
  border-bottom: 2px solid black;
  padding: 0 150px 0 0px;
  margin-top: -25px;
`;

const CreateClubBtn = styled.button`
  background-color: #f6f5f6;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 10px #50505080;

  position: absolute;
  bottom: 0;
  right: -20px;
  color: #002e63;
  font-size: 14px;
`;

export default MyProfile;
