import { NextPage } from 'next';
import ClubMembersView from './clubMembersView';

const ClubMembers: NextPage = () => {
  const props = {
    RepreStudent,
    members,
  };

  return <ClubMembersView {...props} />;
};

export default ClubMembers;
