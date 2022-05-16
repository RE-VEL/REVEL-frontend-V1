import type { NextPage } from 'next';
import AboutClub from '../components/main/aboutClub/aboutClub';
import MoreService from '../components/main/moreService/moreService';

const Home: NextPage = () => {
  return (
    <div>
      <AboutClub />
      <MoreService />
    </div>
  );
};

export default Home;
