import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface positionType {
  top: number | null;
  bottom: number | null;
  right: number;
}

const Circle = (position: positionType) => {
  return <CircleBox {...position} />;
};

const setPosition = ({ top, bottom, right }: positionType) => {
  return css`
    ${top === null ? `bottom:${bottom}%` : `top:${top}%`};
    right: ${right}%;
  `;
};

const CircleBox = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  background-color: #e0e7f0;
  border-radius: 50%;

  ${setPosition}
`;

export default Circle;
