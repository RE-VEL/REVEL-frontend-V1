import styled from '@emotion/styled';
import { NextPage } from 'next';
import ClubMember from './clubMember';

interface member {
  id: number;
  profile: string;
  name: string;
  major: string;
}

interface props {
  tags: string[];
  eplanation: string;
  members: member[];
}

const ClubInfoView: NextPage<props> = ({
  tags,
  eplanation,
  members,
}: props) => {
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
        <Memebrs>
          {members.map((member) => (
            <ClubMember key={member.id} {...member} />
          ))}
        </Memebrs>
      </Information>
    </ClubInfoSection>
  );
};

const Memebrs = styled.div`
  width: 510px;
  height: 150px;
  padding-right: 10px;
  position: absolute;
  bottom: 10px;
  right: 30px;
  display: grid;
  overflow-y: auto;
  overflow-x: hidden;
  grid-template-columns: repeat(5, 1fr);
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 7px; // 스크롤바의 너비
  }

  &::-webkit-scrollbar-thumb {
    background: #002e63; // 스크롤바의 색상
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f6f6f6;
  }
`;

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
  overflow-y: auto;

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
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
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

export default ClubInfoView;
