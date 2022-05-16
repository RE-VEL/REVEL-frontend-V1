import styled from '@emotion/styled';
import { NextPage } from 'next';
import CircleWrap from '../circle/CircleWrap';

const BackCircle: NextPage = () => {
  return <Back>{/* <CircleWrap top: */}</Back>;
};

const Back = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  overflow: hidden;
`;

export default BackCircle;
