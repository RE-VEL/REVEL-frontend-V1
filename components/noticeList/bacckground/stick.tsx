import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';

interface props {
  top: number | null;
  bottom: number | null;
  left: number;
}

const Stick: NextPage<props> = ({ top, left, bottom }: props) => {
  return (
    <StickWrap top={top} bottom={bottom} left={left}>
      <div />
      <div />
    </StickWrap>
  );
};

const setPosition = ({
  top,
  left,
  bottom,
}: {
  top: number | null;
  bottom: number | null;
  left: number;
}) => {
  return css`
    ${top === null ? `bottom:${bottom}%` : `top:${top}%`};
    left: ${left}%;
  `;
};

const StickWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: rotate(-40deg);
  position: absolute;

  ${setPosition}

  & > div {
    width: 400px;
    height: 70px;
    border-radius: 40px;

    &:nth-of-type(1) {
      background-color: #bbd1e9;
    }
    &:nth-of-type(2) {
      background-color: #7ba5d5;
    }
  }
`;

export default Stick;
