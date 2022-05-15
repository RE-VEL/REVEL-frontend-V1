import styled from '@emotion/styled';
import { NextPage } from 'next';

const BackCircle: NextPage = () => {
  return (
    <Back>
      <CircleWrap />
    </Back>
  );
};

const CircleWrap: NextPage = () => {
  return (
    <CircleWrapBox>
      <CircleTop />
      <CircleBottom />
    </CircleWrapBox>
  );
};

const Back = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

const CircleWrapBox = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 1000px;
  top: 100px;

  @keyframes circle-opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  & > div {
    animation: circle-opacity 1s 1 linear both;
  }
`;

const CircleTop = styled.div`
  @keyframes spin-circle-top {
    from {
      transform: rotate(-135deg);
    }
    to {
      transform: rotate(45deg);
    }
  }

  position: relative;
  overflow: hidden;
  height: 50%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    border-radius: 50%;

    border: 200px solid transparent;
    border-top-color: mediumpurple;
    border-left-color: mediumpurple;
    animation: spin-circle-top 0.5s 1 linear both;
  }
`;

const CircleBottom = styled.div`
  @keyframes spin-circle-bottom {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(225deg);
    }
  }

  position: relative;
  overflow: hidden;
  height: 50%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    border-radius: 50%;

    border: 200px solid transparent;

    border-top-color: mediumpurple;
    border-left-color: mediumpurple;

    top: -201px;

    animation: spin-circle-bottom 0.5s 0.5s 1 linear both;
  }
`;

export default BackCircle;
