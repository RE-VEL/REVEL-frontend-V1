import { useState } from 'react';
import { memberType } from '../../interface/clubMember';
import MemberListView from './memberListView';

const MemberList = () => {
  const [members, setMembers] = useState<memberType[]>([{ id: 0, name: '' }]);

  const addMember = (): void => {
    const id = members[members.length - 1].id + 1;
    setMembers([...members, { id, name: '' }]);
  };

  const props = {
    members,
    addMember,
  };

  return <MemberListView {...props} />;
};

export default MemberList;
