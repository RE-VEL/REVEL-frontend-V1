import styled from '@emotion/styled';
import { NextPage } from 'next';
import Member from './member/member';

const members = [
  { id: 0, name: '순호킴', profile: '/img/banner.png' },
  { id: 1, name: '순호킴', profile: '/img/banner.png' },
  { id: 2, name: '순호킴', profile: '/img/banner.png' },
  { id: 3, name: '순호킴', profile: '/img/banner.png' },
  { id: 4, name: '순호킴', profile: '/img/banner.png' },
  { id: 5, name: '순호킴', profile: '/img/banner.png' },
  { id: 6, name: '순호킴', profile: '/img/banner.png' },
  { id: 7, name: '순호킴', profile: '/img/banner.png' },
  { id: 8, name: '순호킴', profile: '/img/banner.png' },
  { id: 9, name: '순호킴', profile: '/img/banner.png' },
  { id: 10, name: '순호킴', profile: '/img/banner.png' },
  { id: 11, name: '순호킴', profile: '/img/banner.png' },
  { id: 12, name: '순호킴', profile: '/img/banner.png' },
  { id: 13, name: '순호킴', profile: '/img/banner.png' },
  { id: 14, name: '순호킴', profile: '/img/banner.png' },
  { id: 15, name: '순호킴', profile: '/img/banner.png' },
  { id: 16, name: '순호킴', profile: '/img/banner.png' },
];

const MemberSection: NextPage = () => {
  return (
    <MembersWrap>
      {members.map((member) => (
        <Member key={member.id} />
      ))}
    </MembersWrap>
  );
};

const MembersWrap = styled.section`
  width: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  height: 41.5%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(6, 1fr);
`;

export default MemberSection;
