import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { requestType } from 'src/interface/createClub';
import RepresenView from './represenView';

interface props {
  request: requestType;
  changeClubDoc: (name: string, value: string) => void;
}

const Represen: NextPage<props> = ({ request, changeClubDoc }: props) => {
  const formatTeacherEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    const email = value.replace(/[^\w@.]/, '').replace(/\.+/g, '.');
    changeClubDoc('teacherEmail', email);
  };

  const props = {
    request,
    formatTeacherEmail,
  };

  return <RepresenView {...props} />;
};

export default Represen;
