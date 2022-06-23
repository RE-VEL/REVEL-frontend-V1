import styled from '@emotion/styled';
import { NextPage } from 'next';

const Developer: NextPage = () => {
  return (
    <>
      <BackEndLine>
        <DevDiv>
          <DeveloperInfo>back-end</DeveloperInfo>
          <DeveloperInfo>박준형</DeveloperInfo>
          <TopLineCircle>
            <InCir />
          </TopLineCircle>
        </DevDiv>
        <DevDiv>
          <DeveloperInfo>back-end</DeveloperInfo>
          <DeveloperInfo>안진우</DeveloperInfo>
          <TopLineCircle>
            <InCir />
          </TopLineCircle>
        </DevDiv>
      </BackEndLine>
      <FrontEndLine>
        <DevDiv>
          <DeveloperInfo>disign</DeveloperInfo>
          <TopLineCircle>
            <InCir />
          </TopLineCircle>
          <DeveloperInfo>김순호</DeveloperInfo>
        </DevDiv>
        <DevDiv>
          <DeveloperInfo>front-end</DeveloperInfo>
          <BottomLineCircle>
            <InCir />
          </BottomLineCircle>
          <DeveloperInfo>배준수</DeveloperInfo>
        </DevDiv>
        <DevDiv>
          <DeveloperInfo>disign</DeveloperInfo>
          <BottomLineCircle>
            <InCir />
          </BottomLineCircle>
          <DeveloperInfo>홍아연</DeveloperInfo>
        </DevDiv>
      </FrontEndLine>
    </>
  );
};

const DeveloperInfo = styled.p`
  font-family: 'suncheon';
  font-size: 20px;
  margin: 0;
  color: #1d3078;
`;

const DevDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 150px;
`;

const TopLineCircle = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const BottomLineCircle = styled(TopLineCircle)`
  align-items: flex-end;
`;

const InCir = styled.div`
  height: 100px;
  width: 100px;

  border-radius: 50px;
  border: 1px solid black;

  background-image: url('/img/layer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: end;
`;

const BackEndLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50vw;
  position: relative;
`;

const FrontEndLine = styled(BackEndLine)`
  margin-top: -20px;
  position: relative;
  justify-content: space-between;
`;

export default Developer;
