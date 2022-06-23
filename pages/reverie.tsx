import styled from '@emotion/styled';
import { NextPage } from 'next';
import Developer from '../components/developerIntroduce/developer';

const Reverie: NextPage = () => {
  return (
    <IntroducePage>
      <ImgDiv />
      <IntoroDevSection>
        <TitleWrap>
          <AboutUs>
            <LineDiv />
            <SectionTitle>ABOUT US</SectionTitle>
          </AboutUs>
          <RevelTxt>Reverie Easily Vouch Everything with Labor</RevelTxt>
        </TitleWrap>
        <Introduce>
          <p>본교의 전공동아리를 관리하기 위한 시스템을 제공합니다.</p>
          <p>물품 신청, 동아리원 모집, 공지사항 안내 등을 지원하며</p>
          <p>동아리 관련 규칙도 공지합니다.</p>
        </Introduce>
        <DevIntroTitleWrap>
          <LineDiv />
          <Mtxt>DEVELOPER</Mtxt>
        </DevIntroTitleWrap>
        <Developer />
      </IntoroDevSection>
    </IntroducePage>
  );
};

const Introduce = styled.div`
  margin-top: 10px;
  overflow: hidden;
  align-self: flex-start;

  & > p {
    font-family: 'nanumsquareround';
    white-space: nowrap;
    font-size: 20px;
    color: #1d3078;
    margin: 0;
  }
`;

const AboutUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DevIntroTitleWrap = styled(AboutUs)`
  align-self: flex-end;
`;

const IntoroDevSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RevelTxt = styled.p`
  font-family: 'nanumgothic';
  color: #8396af;
  font-size: 1.5vw;
  width: 40vw;
  text-align: right;
`;

const LineDiv = styled.div`
  float: left;
  height: 3px;
  width: 100px;
  background-color: #1d3078;
`;

const TitleWrap = styled.div`
  margin-top: 120px;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Mtxt = styled.p`
  font-family: 'nanumsquareround';
  font-size: 30px;
  text-align: center;
  color: #1d3078;
  margin-top: 10px;
  white-space: nowrap;
`;

const SectionTitle = styled(Mtxt)`
  margin-bottom: 20px;
`;

const IntroducePage = styled.div`
  height: 100vh;
  width: 95vw;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
`;

const ImgDiv = styled.div`
  height: 90vh;
  width: 250px;
  padding-top: 80px;
  background-image: url('/img/revel_dev.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: end;
  justify-content: flex-start;
`;

export default Reverie;
