import { NextPage } from 'next';
import { useState } from 'react';
import HeaderView from './headerView';

const Header = () => {
  const [profileHover, setProfileHover] = useState<boolean>(false);

  const props = {
    profileHover,
    onMouseEnter: (): void => setProfileHover(true),
    onMouseLeave: (): void => setProfileHover(false),
  };

  return <HeaderView {...props} />;
};

export default Header;
