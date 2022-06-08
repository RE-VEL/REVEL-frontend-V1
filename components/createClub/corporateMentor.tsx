import { NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';
import { mentorHashType } from '../../interface/corporateMentor';
import CorporateMentorView from './corporateMentorView';

interface props {
  changeClubDoc: (name: string, value: any) => void;
}

const CorporateMentor: NextPage<props> = ({ changeClubDoc }: props) => {
  const [mentors, setMentors] = useState<mentorHashType>({
    0: { name: '', belong: '', email: '', phoneNum: '' },
  });

  useEffect(() => {
    changeClubDoc('mentor', Object.values(mentors));
  }, [mentors]);

  const addMentor = (): void => {
    const key =
      Math.max(...Object.keys(mentors).map((key) => parseInt(key))) + 1;

    setMentors({
      ...mentors,
      [key]: { name: '', belong: '', email: '', phoneNum: '' },
    });
  };

  const changeMentor = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const [id, item] = name.split('_');

    setMentors({
      ...mentors,
      [id]: {
        ...mentors[parseInt(id)],
        [item]: value,
      },
    });
  };

  const props = {
    mentors,
    addMentor,
    changeMentor,
  };

  return <CorporateMentorView {...props} />;
};

export default CorporateMentor;
