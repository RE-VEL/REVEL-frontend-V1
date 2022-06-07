import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { clubType } from '../../interface/clubData';
import CreateClubView from './CreateClubView';

const CreateClub: NextPage = () => {
  const [clubData, setClubData] = useState<clubType>({
    purpose: '',
    achievement: '',
    memo: '',
    firstDesiredRoom: '',
    secondDesiredRoom: '',
  });

  const changeClubData = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    const { value, name } = e.target;

    console.log(clubData);

    setClubData({ ...clubData, [name]: value });
  };

  const props = {
    clubData,
    changeClubData,
  };

  return <CreateClubView {...props} />;
};

export default CreateClub;
