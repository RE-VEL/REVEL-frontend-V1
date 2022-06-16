import styled from '@emotion/styled';
import { NextPage } from 'next';

const tags = ['EMBEDDED', 'WEB', '전공동아리'];
const eplanation = `상상만 해도 웃음이 나요 바나나 한입 먹지 못하는 원숭이라니 
내가 생각해도 정말 한심하죠 그런 눈으로 보지는 마요 값싼 동정은 필요 없으니 나 몰래 입을 가리고 웃는 거 다 아니까 나는 바나나 알러지 원숭이 

그래도 나는 바나나 좋아해 나는 바나나 알러지 원숭이 그래도 나는 바나나 사랑해 Oh yeah, oh yeah, oh oh oh Oh yeah (oh yeah) oh yeah (oh yeah) oh yeah (앙) 믿을 수 없는 일이 생겼죠 엄마가 손에 꼭 쥐여주신 바나나 맛이 나는 바나나 향이 가득한 우유 깜짝 놀라서 눈이 커져요 너무 달콤한 향기에 취해 빨대를 타고 올라오는 노란 빛깔 바나나 나는 바나나 알러지 원숭이 바나나 우유 있어서 행복해 나는 바나나 알러지 원숭이 바나나 우유 있어서 난 좋아 Oh yeah, oh yeah, oh oh oh Oh yeah (oh yeah), oh yeah (oh yeah), oh yeah (ow!) 어떡해 나 바나나가 없으면 어떡해 어떡해 어떡해 어떡해 바나나 바나나 바나나 나나나나그래도 나는 바나나 좋아해 나는 바나나 알러지 원숭이 그래도 나는 바나나 사랑해 Oh yeah, oh yeah, oh oh oh Oh yeah (oh yeah) oh yeah (oh yeah) oh yeah (앙) 믿을 수 없는 일이 생겼죠 엄마가 손에 꼭 쥐여주신 바나나 맛이 나는 바나나 향이 가득한 우유 깜짝 놀라서 눈이 커져요 너무 달콤한 향기에 취해 빨대를 타고 올라오는 노란 빛깔 바나나 나는 바나나 알러지 원숭이 바나나 우유 있어서 행복해 나는 바나나 알러지 원숭이 바나나 우유 있어서 난 좋아 Oh yeah, oh yeah, oh oh oh Oh yeah (oh yeah), oh yeah (oh yeah), oh yeah (ow!) 어떡해 나 바나나가 없으면 어떡해 어떡해 어떡해 어떡해 바나나 바나나 바나나 나나나나그래도 나는 바나나 좋아해`;

const ClubInfo: NextPage = () => {
  return (
    <ClubInfoSection>
      <Banner>
        <Apply>지원하기</Apply>
      </Banner>
      <Information>
        <ClubTagWrap>
          <FacebookPage />
          {tags.map((tag, i) => (
            <Tag key={i}>#{tag}</Tag>
          ))}
        </ClubTagWrap>
        <Explanation>{eplanation}</Explanation>
        <ClubMainDataWrap>
          <ClubName>NONAMED</ClubName>
          <ClubIcon />
        </ClubMainDataWrap>
      </Information>
    </ClubInfoSection>
  );
};

const ClubName = styled.p`
  font-size: 60px;
  font-weight: 500;
  margin: 0;
  color: #002e63;
`;

const ClubIcon = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('/img/banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100px;
`;

const ClubMainDataWrap = styled.div`
  position: absolute;
  right: 30px;
  top: -50px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Tag = styled.span`
  color: #002e63;
  font-size: 18px;
`;

const FacebookPage = styled.div`
  width: 50px;
  height: 50px;
  background-image: url('/img/clubFacebookLink.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ClubTagWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Explanation = styled.p`
  margin: 0;
  width: 60%;
  height: 40%;
  margin: 30px 0 0 50px;
  flex-direction: column;

  line-height: 130%;
  word-spacing: 100%;
  white-space: pre-wrap;

  display: flex;
  overflow-y: hidden;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Information = styled.div`
  flex: 1 1 auto;
  width: 100vw;
  padding: 15px 25px;
  position: relative;
`;

const Apply = styled.button`
  position: absolute;
  bottom: 20px;
  left: 25px;
  border: none;
  outline: 0;
  background-color: white;
  font-size: 14px;
  color: #002e63;
  padding: 7px 25px;
  border-radius: 10px;
`;

const Banner = styled.div`
  width: 100vw;
  height: 15vw;
  flex: 0 0 15vw;
  background-image: url('/img/banner/t1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
`;

const ClubInfoSection = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;

export default ClubInfo;
