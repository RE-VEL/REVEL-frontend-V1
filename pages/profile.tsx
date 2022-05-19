import styled from '@emotion/styled';
import { NextPage } from 'next';
import Slider from 'react-slick';
import { sliderSetting } from '../interface/sliderSetting';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { card } from '../interface/card';

const settings: sliderSetting = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
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

const MyProfile: NextPage = () => {
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
        <SliderSection {...settings}>
          <MyClub>3</MyClub>
          <MyClub>3</MyClub>
          <MyClub>3</MyClub>
          <MyClub>3</MyClub>
        </SliderSection>
      </div>
    </MyPage>
  );
};

const SliderSection = styled(Slider)`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const MyClub = styled.div`
  background-color: blue;
  margin: 10px;
`;

const MyPage = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  padding: 5vh 5vw;
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
  box-shadow: 0 0 4px #505050;

  position: absolute;
  bottom: 0;
  right: -20px;
  color: #002e63;
  font-size: 14px;
`;

export default MyProfile;
