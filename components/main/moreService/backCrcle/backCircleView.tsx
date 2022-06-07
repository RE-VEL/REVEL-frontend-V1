import styled from '@emotion/styled';
import { NextPage } from 'next';
import Circle from './circle';

const BackCircleView: NextPage = () => {
  return (
    <Back>
      <Circle
        top={-40}
        left={-15}
        right={null}
        color={'#E7F1FE'}
        opcity={1}
        size={900}
      />
      <Circle
        top={30}
        left={null}
        right={-15}
        color={'#E7F1FE'}
        opcity={1}
        size={900}
      />
      <Circle
        top={58}
        left={null}
        right={5}
        color={'#8DA3C2'}
        opcity={0.2}
        size={1000}
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

  overflow: hidden;
`;

export default BackCircleView;
