import styled from '@emotion/styled';
import { NextPage } from 'next';
import CircleWrap from './CircleWrap';

const BackCircle: NextPage = () => {
  return (
    <Back>
      <CircleWrap top={5} left={-1} right={null} opcity={1} color={'#DFEBFC'} />
      <CircleWrap
        top={25}
        left={-10}
        right={null}
        opcity={0.48}
        color={'#C8D3E2'}
      />
      <CircleWrap
        top={30}
        left={null}
        right={10}
        opcity={1}
        color={'#DFEBFC'}
      />
      <CircleWrap
        top={10}
        left={null}
        right={-4}
        opcity={0.48}
        color={'#C8D3E2'}
      />
    </Back>
  );
};

const Back = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export default BackCircle;
