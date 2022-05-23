import type { NextPage } from 'next';
import Footer from '../components/common/footer/footer';
import AboutClub from '../components/main/aboutClub/aboutClub';
import ClubBannerCarousel from '../components/main/clubBannerCarousel/ClubCarousel';
import Marguee from '../components/main/marguee/marguee';
import MoreService from '../components/main/moreService/moreService';

const Home: NextPage = () => {
  return (
    <div>
      <ClubBannerCarousel />
      <AboutClub />
      <MoreService />
      <Marguee />
      <Footer />
    </div>
  );
};

export default Home;
