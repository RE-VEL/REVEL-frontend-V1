import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Circle from './circle';

const BackCircle: NextPage = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleScroll = () => {
    setIsShow(window.innerHeight * 1.2 < window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Back isShow={isShow}>
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

const show = ({ isShow }: { isShow: boolean }) => {
  return css`
    ${isShow ? 'display:block' : 'display:none'}
  `;
};

const Back = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  overflow: hidden;
  ${show}
`;

export default BackCircle;
