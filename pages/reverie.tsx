import styled from '@emotion/styled';
import { NextPage } from 'next';

const Reverie: NextPage = () => {
  return (
    <>
      <BackDiv>
        <InDiv>
          <ImgDiv></ImgDiv>
          <TextDiv>
            <Lin></Lin>
            <MtxtDiv style={{ color: '#1D3078' }}>ABOUT US</MtxtDiv>
          </TextDiv>
        </InDiv>
      </BackDiv>
    </>
  );
};

const TextDiv = styled.div`
  height: 50vh;
  width: 50vw;
  display: flex;
  align-items: center;
`;
const Lin = styled.hr`
  border: solid, 2px, #1d3078;
`;
const line = styled.div`
  height: 2px;
  width: 10px;
`;
const MtxtDiv = styled.div`
  font-family: 'nanumsquareround';
  font-size: 30pt;
`;
const BackDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const InDiv = styled.div`
  height: 100vh;
  width: 90vw;
  display: flex;
`;
const ImgDiv = styled.div`
  height: 90vh;
  width: 300px;
  padding-top: 80px;
  background-image: url('/img/revel_dev.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: end;
  justify-content: flex-start;
`;

export default Reverie;
