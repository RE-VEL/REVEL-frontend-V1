import { NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  clubDocsValue,
  mentorApplyRequest,
  mentorHashType,
} from '../../interface/createClub';
import CorporateMentorView from './corporateMentorView';

interface props {
  changeClubDoc: (name: string, value: clubDocsValue) => void;
}

const CorporateMentor: NextPage<props> = ({ changeClubDoc }: props) => {
  const [mentors, setMentors] = useState<mentorHashType>({
    0: { name: '', company: '', email: '', phone: '' },
  });

  const changeMentorApplyRequest = () => {
    const mentor = Object.values(mentors).filter((m: mentorApplyRequest) => {
      return !Object.values(m).includes('');
    });
    changeClubDoc('mentorApplyRequest', mentor);
  };

  useEffect(() => {
    changeMentorApplyRequest();
  }, [mentors]);

  const addMentor = (): void => {
    const key =
      Math.max(...Object.keys(mentors).map((key) => parseInt(key))) + 1;

    setMentors({
      ...mentors,
      [key]: { name: '', company: '', email: '', phone: '' },
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
