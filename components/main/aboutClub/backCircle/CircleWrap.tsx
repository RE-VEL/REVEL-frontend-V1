import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';

interface locationProps {
  top: number;
  left: number | null;
  right: number | null;
  opcity: number;
}

const CircleWrap: NextPage<locationProps & { color: string }> = ({
  top,
  left,
  right,
  opcity,
  color,
}: locationProps & { color: string }) => {
  return (
    <CircleWrapBox top={top} left={left} right={right} opcity={opcity}>
      <CircleTop color={color} />
      <CircleBottom color={color} />
    </CircleWrapBox>
  );
};

const setLocation = ({ top, left, right, opcity }: locationProps) => {
  return css`
    opacity: ${opcity};
    top: ${top}%;
    ${left === null ? `right:${right}%` : `left:${left}%`};

    transform: rotate(${Math.random() * 360}deg);
  `;
};

const CircleWrapBox = styled.div`
  position: absolute;

  width: 400px;
  height: 400px;

  ${setLocation};

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
  height: 50%;

  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border-radius: 50%;

    animation: spin-circle-top 0.5s 1 linear both;
    border: 200px solid transparent;

    border-top-color: ${({ color }: { color: string }) => color};
    border-left-color: ${({ color }: { color: string }) => color};

    width: 400px;
    height: 400px;
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
    box-sizing: border-box;
    border-radius: 50%;

    border-top-color: ${({ color }: { color: string }) => color};
    border-left-color: ${({ color }: { color: string }) => color};

    border: 200px solid transparent;
    border-top-color: ${({ color }: { color: string }) => color};
    border-left-color: ${({ color }: { color: string }) => color};

    width: 400px;
    height: 400px;
    top: -201px;

    animation: spin-circle-bottom 0.5s 0.5s 1 linear both;
  }
`;

export default CircleWrap;
