import styled from '@emotion/styled';
import { NextPage } from 'next';
import Member from './member/member';

const members = [
  { id: 0, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 1, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 2, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 3, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 4, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 5, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 6, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 7, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 8, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 9, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 10, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 11, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 12, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 13, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 14, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 15, name: '순호킴', profile: '/img/banner.png', major: 'design' },
  { id: 16, name: '순호킴', profile: '/img/banner.png', major: 'design' },
];

const MemberSection: NextPage = () => {
  return (
    <MembersWrap>
      {members.map((member) => (
        <Member key={member.id} {...member} />
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
