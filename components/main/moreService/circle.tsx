import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';

interface locationProps {
  top: number;
  left: number | null;
  right: number | null;
  opcity: number;
  color: string;
  size: number;
}

const Circle: NextPage<locationProps> = ({
  top,
  left,
  right,
  opcity,
  color,
  size,
}: locationProps) => {
  return (
    <CircleContainer
      top={top}
      left={left}
      right={right}
      opcity={opcity}
      color={color}
      size={size}
    ></CircleContainer>
  );
};

const setStyle = ({ top, left, right, opcity, color, size }: locationProps) => {
  return css`
    top: ${top}%;
    ${left === null ? `right:${right}%` : `left:${left}%`};

    opacity: ${opcity};
    background-color: ${color};
    width: ${size}px;
    height: ${size}px;

    border-radius: ${size / 2}px;
  `;
};

const CircleContainer = styled.div`
  position: absolute;

  ${setStyle}
`;

export default Circle;
