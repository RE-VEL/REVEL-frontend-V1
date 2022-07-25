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

  const getFormatName = (name: string): string => {
    return name.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣a-zA-Z]/, '');
  };

  const getFormatEmail = (email: string): string => {
    return email.replace(/[^\w@.]/, '').replace(/\.+/g, '.');
  };

  const getFormatPhone = (phone: string): string => {
    const newPhone = phone
      .replace(/[^\d]/g, '')
      .slice(0, 11)
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

    return newPhone;
  };

  const changeMentor = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const [strId, item] = name.split('_');

    const id = parseInt(strId);

    let newValue = value;

    if (item === 'name' || item === 'company') {
      newValue = getFormatName(value);
    } else if (item === 'email') {
      newValue = getFormatEmail(value);
    } else if (item === 'phone') {
      newValue = getFormatPhone(value);
    } else {
      throw new Error('알 수 없는 item!!');
    }

    setMentors({
      ...mentors,
      [id]: {
        ...mentors[id],
        [item]: newValue,
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
