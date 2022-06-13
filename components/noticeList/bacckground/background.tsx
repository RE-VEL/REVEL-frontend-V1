import styled from '@emotion/styled';
import { NextPage } from 'next';
import Stick from './stick';

const Background: NextPage = () => {
  return (
    <BackgroundContainer>
      <Stick top={5} bottom={null} left={2} />
      <Stick top={null} bottom={-3} left={2} />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Background;
