import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { clubDocsValue, clubType } from '../../interface/clubData';
import CreateClubView from './CreateClubView';

const CreateClub: NextPage = () => {
  const [clubData, setClubData] = useState<clubType>({
    purpose: '',
    achievement: '',
    memo: '',
    firstDesiredRoom: '',
    secondDesiredRoom: '',
    clubName: '',
    founding: '',
    rep: '',
    teacher: '',
    members: [],
    mentor: [],
  });

  const changeClubData = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    const { value, name } = e.target;

    setClubData({ ...clubData, [name]: value });
  };

  const changeClubDoc = (name: string, value: clubDocsValue): void => {
    setClubData({ ...clubData, [name]: value });
  };

  const props = {
    clubData,
    changeClubData,
    changeClubDoc,
  };

  return <CreateClubView {...props} />;
};

export default CreateClub;
