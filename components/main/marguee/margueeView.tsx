import styled from '@emotion/styled';
import { NextPage } from 'next';
import { RefObject } from 'react';
import MargueeItem from './margueeItem';

interface props {
  margueeRef: RefObject<HTMLDivElement>;
}

const MargueeView: NextPage<props> = ({ margueeRef }: props) => {
  return (
    <MargueeSection>
      <MargueeContainer ref={margueeRef}>
        <MargueeItem />
        <MargueeItem />
      </MargueeContainer>
    </MargueeSection>
  );
};

const MargueeSection = styled.section`
  width: 100vw;
  height: 70px;
  background-color: #e7f1fe;
  overflow-x: hidden;
`;

const MargueeContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export default MargueeView;
