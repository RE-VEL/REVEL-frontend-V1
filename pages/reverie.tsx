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
                <Mtxt>ABOUT US</Mtxt>
              </AboutUs>
              <RevelTxt>Reverie Easily Vouch Everything with Labor</RevelTxt>
            </TextDiv>

            <TextDiv2>
              <AboutUs>
                <LineDiv></LineDiv>
                <Mtxt>DEVELOPER</Mtxt>
              </AboutUs>
            </TextDiv2>

            <Line>
              <DevDiv>
                <Filed>back-end</Filed>
                <OutCir>
                  <InCir></InCir>
                </OutCir>
                <Name>박준형</Name>
              </DevDiv>

              <DevDiv>
                <Filed>back-end</Filed>
                <OutCir>
                  <InCir></InCir>
                </OutCir>
                <Name>안진우</Name>
              </DevDiv>
            </Line>

            <Line>
              <DevDiv>
                <Filed>front-end & disign</Filed>
                <OutCir>
                  <InCir></InCir>
                </OutCir>
                <Name>김순호</Name>
              </DevDiv>

              <DevDiv>
                <Filed>front-end </Filed>
                <OutCir>
                  <InCir></InCir>
                </OutCir>
                <Name>배준수</Name>
              </DevDiv>

              <DevDiv>
                <Filed>front-end & disign</Filed>
                <OutCir>
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
`;
const RevelTxt = styled.p`
  font-family: 'nanumgothic';
  color: #8396af;
  font-size: 1.5vw;
  width: 40vw;
`;

const LineDiv = styled.div`
  height: 3px;
  width: 100px;
  background-color: #1d3078;
`;

const TextDiv = styled.div`
  margin-top: 120px;
  width: 50vw;
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
`;
const BackDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: right;
`;

const InDiv = styled.div`
  height: 100vh;
  width: 95vw;
  display: flex;
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
`;
const Filed = styled.p`
  font-family: 'suncheon';
  font-size: 20pt;
  margin: 0%;
  text-align: center;
`;
const DevDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 150px;
`;
const OutCir = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 100%;
  border: 1px solid black;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const InCir = styled.div`
  height: 120px;
  width: 120px;
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
  margin-top: 30px;
`;

export default Reverie;
