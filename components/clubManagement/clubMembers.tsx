import { NextPage } from 'next';
import ClubMembersView from './clubMembersView';

const RepreStudent = {
  id: 0,
  name: '김순호',
  profile: '/img/banner.png',
};

const members = [
  {
    id: 0,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 1,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 2,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 3,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 4,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 5,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 6,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 7,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 8,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 9,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 10,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 11,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 12,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 13,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 14,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 15,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 16,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 17,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 18,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 19,
    name: '순호킴',
    profile: '/img/banner.png',
  },
  {
    id: 20,
    name: '순호킴',
    profile: '/img/banner.png',
  },
];

const ClubMembers: NextPage = () => {
  const props = {
    RepreStudent,
    members,
  };

  return <ClubMembersView {...props} />;
};

export default ClubMembers;
