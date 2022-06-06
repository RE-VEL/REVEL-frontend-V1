import { NextPage } from 'next';
import { sliderSetting } from '../../../interface/sliderSetting';
import AboutClubView from './aboutClubView';

const AboutClub: NextPage = () => {
  const props = {};
  return <AboutClubView {...props} />;
};

export default AboutClub;
