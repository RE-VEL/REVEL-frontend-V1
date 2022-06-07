import { NextPage } from 'next';
import { useState } from 'react';
import { mentorType } from '../../interface/corporateMentor';
import CorporateMentorView from './corporateMentorView';

const CorporateMentor: NextPage = () => {
  const [mentors, setMentors] = useState<mentorType[]>([
    { id: 0, name: '', belong: '', email: '', phoneNum: '' },
  ]);

  const addMentor = () => {
    const id = mentors[mentors.length - 1].id + 1;

    setMentors([
      ...mentors,
      { id, name: '', belong: '', email: '', phoneNum: '' },
    ]);
  };

  const props = {
    mentors,
    addMentor,
  };

  return <CorporateMentorView {...props} />;
};

export default CorporateMentor;
