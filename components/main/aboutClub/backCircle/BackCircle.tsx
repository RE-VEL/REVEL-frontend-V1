import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import BackCircleView from './BackCircleView';

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

  return isShow ? <BackCircleView /> : <></>;
};

export default BackCircle;
