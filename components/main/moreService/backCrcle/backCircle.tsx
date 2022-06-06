import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import BackCircleView from './backCircleView';

const BackCircle: NextPage = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isEnter, setIsEnter] = useState<boolean>(false);

  const handleScroll = () => {
    if (!isEnter && window.innerHeight * 1.2 < window.scrollY) {
      setIsShow(true);
      setIsEnter(true);
    } else if (window.innerHeight * 1 >= window.scrollY) {
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
