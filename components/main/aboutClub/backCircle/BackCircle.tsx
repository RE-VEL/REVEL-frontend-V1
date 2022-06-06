import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import CircleWrap from './CircleWrap';

const BackCircle: NextPage = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isEnter, setIsEnter] = useState<boolean>(false);

  const handleScroll = () => {
    if (
      !isEnter &&
      window.innerHeight * 0.2 < window.scrollY &&
      window.innerHeight * 1.8 > window.scrollY
    ) {
      setIsShow(true);
      setIsEnter(true);
    } else if (
      0 === window.scrollY ||
      window.innerHeight * 2 <= window.scrollY
    ) {
      setIsShow(false);
      setIsEnter(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Back isShow={isShow}>
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
