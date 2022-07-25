import styled from '@emotion/styled';
import { NextPage } from 'next';

const Reverie: NextPage = () => {
  return (
    <>
      <BackDiv>
        <InDiv>
          <ImgDiv></ImgDiv>
          <InfDiv>
            <TextDiv>
              <AboutUs>
                <LineDiv></LineDiv>
                <Mtxt style={{ marginBottom: '20px' }}>ABOUT US</Mtxt>
              </AboutUs>
              <RevelTxt style={{ textAlign: 'right' }}>
                Reverie Easily Vouch Everything with Labor
              </RevelTxt>
            </TextDiv>
            <TextDiv style={{ margin: 0 }}>
              <Mtxt
                style={{ fontSize: '15pt', textAlign: 'left', float: 'right' }}
              >
                본교의 전공동아리를 관리하기 위한 시스템을 제공합니다. <br />{' '}
                물품 신청, 동아리원 모집, 공지사항 안내 등을 지원하며
                <br /> 동아리 관련 규칙도 공지합니다.
              </Mtxt>
            </TextDiv>

            <TextDiv2>
              <AboutUs>
                <LineDiv style={{ height: '3.5px' }}></LineDiv>
                <Mtxt>DEVELOPER</Mtxt>
              </AboutUs>
            </TextDiv2>

            <Line style={{ width: '40vw' }}>
              <DevDiv>
                <Filed>back-end</Filed>
                <Name>박준형</Name>
                <OutCir>
                  <InCir></InCir>
                </OutCir>
              </DevDiv>

              <DevDiv>
                <Filed>back-end</Filed>
                <Name>안진우</Name>
                <OutCir>
                  <InCir></InCir>
                </OutCir>
              </DevDiv>
            </Line>

            <Line style={{ marginTop: 30, position: 'relative', top: '-85px' }}>
              <DevDiv>
                <Filed>front-end & disign</Filed>
                <OutCir style={{ alignItems: 'flex-end' }}>
                  <InCir></InCir>
                </OutCir>
                <Name>김순호</Name>
              </DevDiv>

              <DevDiv>
                <Filed style={{ marginBottom: 23 }}>front-end </Filed>
                <OutCir style={{ alignItems: 'flex-end' }}>
                  <InCir></InCir>
                </OutCir>
                <Name>배준수</Name>
              </DevDiv>

              <DevDiv>
                <Filed>front-end & disign</Filed>
                <OutCir style={{ alignItems: 'flex-end' }}>
                  <InCir></InCir>
                </OutCir>
                <Name>홍아연</Name>
              </DevDiv>
            </Line>
          </InfDiv>
        </InDiv>
      </BackDiv>
    </>
  );
};

const AboutUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InfDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RevelTxt = styled.p`
  font-family: 'nanumgothic';
  color: #8396af;
  font-size: 1.5vw;
  width: 40vw;
`;

const LineDiv = styled.div`
  float: left;
  height: 3px;
  width: 100px;
  background-color: #1d3078;
`;

const TextDiv = styled.div`
  margin-top: 120px;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextDiv2 = styled.div`
  margin-top: 30px;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

const Mtxt = styled.p`
  font-family: 'nanumsquareround';
  font-size: 30pt;
  text-align: center;
  color: #1d3078;
  margin-top: 10px;
  overflow: hiddlen;
  white-space: nowrap;
`;
const BackDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const InDiv = styled.div`
  height: 100vh;
  width: 95vw;
  display: flex;
  justify-content: space-evenly;
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
const Name = styled.p`
  font-family: 'suncheon';
  font-size: 20pt;
  background-color: white;
  margin: 0%;
  color: #1d3078;
`;
const Filed = styled.p`
  font-family: 'suncheon';
  font-size: 20pt;
  margin: 0%;
  text-align: center;
  color: #1d3078;
`;
const DevDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 150px;
`;
const OutCir = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  border: 1px solid black;
  display: flex;

  justify-content: center;
  margin: 5px;
`;
const InCir = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  border: 1px solid black;
  background-image: url('/img/레이어 1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: end;
  justify-content: flex-start;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  position: relative;
`;

export default Reverie;
