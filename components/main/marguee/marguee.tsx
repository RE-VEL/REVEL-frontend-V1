import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import MargueeItem from './margueeItem';

const Marguee: NextPage = () => {
  const margueeRef = useRef<HTMLDivElement>(null);
  let count = 0;

  const marqueeText = (count: number) => {
    if (margueeRef.current && count > margueeRef.current.scrollWidth / 2) {
      margueeRef.current.style.transform = `translateX(0)`;
      count = 0;
    }

    if (margueeRef.current) {
      margueeRef.current.style.transform = `translateX(${-count}px)`;
    }
    return count;
  };

  const animate = () => {
    count++;

    count = marqueeText(count);

    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
  }, []);
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

export default Marguee;
