import { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import MargueeView from './margueeView';

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

  const props = {
    margueeRef,
  };

  return <MargueeView {...props} />;
};

export default Marguee;
