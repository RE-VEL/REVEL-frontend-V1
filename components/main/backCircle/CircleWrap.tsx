import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useState } from 'react';

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
  width: 400px;
  height: 400px;
  position: absolute;

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
    border-top-color: ${({ color }: { color: string }) => color};
    border-left-color: ${({ color }: { color: string }) => color};
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

    border-top-color: ${({ color }: { color: string }) => color};
    border-left-color: ${({ color }: { color: string }) => color};

    top: -201px;

    animation: spin-circle-bottom 0.5s 0.5s 1 linear both;
  }
`;

export default CircleWrap;
