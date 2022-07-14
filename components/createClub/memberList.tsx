import { ChangeEvent, useEffect, useState } from 'react';
import { clubDocsValue } from '../../interface/createClub';
import { memberType } from '../../interface/clubMember';
import MemberListView from './memberListView';

interface props {
  changeClubDoc: (name: string, value: clubDocsValue) => void;
}

const MemberList = ({ changeClubDoc }: props) => {
  const [members, setMembers] = useState<memberType>({ 0: '' });

  useEffect(() => {
    changeClubDoc('members', Object.values(members));
  }, [members]);

  const addMember = (): void => {
    const key =
      Math.max(...Object.keys(members).map((key) => parseInt(key))) + 1;
    setMembers({ ...members, [key]: '' });
  };

  const changeMemberData = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setMembers({
      ...members,
      [name]: value,
    });
  };

  const props = {
    members,
    addMember,
    changeMemberData,
  };

  return <MemberListView {...props} />;
};

export default MemberList;
