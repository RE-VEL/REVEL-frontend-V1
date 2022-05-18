import type { NextPage } from 'next';
import AboutClub from '../components/main/aboutClub/aboutClub';
import ClubBannerCarousel from '../components/main/clubBannerCarousel/ClubCarousel';
import MoreService from '../components/main/moreService/moreService';

const Home: NextPage = () => {
  return (
    <div>
      <ClubBannerCarousel />
      <AboutClub />
      <MoreService />
    </div>
  );
};

export default Home;
