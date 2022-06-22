import styled from '@emotion/styled';
import { NextPage } from 'next';
import Circle from './circle';
import Stick from './stick';

const Background: NextPage = () => {
  return (
    <BackgroundContainer>
      <Stick top={2.5} bottom={null} left={2} />
      <Stick top={null} bottom={-3} left={2} />
      <Circle top={-25} bottom={null} right={8} />
      <Circle top={null} bottom={0} right={8} />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default Background;
