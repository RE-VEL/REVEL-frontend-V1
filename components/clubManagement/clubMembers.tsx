import styled from '@emotion/styled';
import { NextPage } from 'next';
import Member from './member';

const RepreStudent = {
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
  return (
    <MemberSection>
      <RepresentativeStudentWrap>
        <Profile profile={RepreStudent.profile} />
        <Name>{RepreStudent.name}</Name>
      </RepresentativeStudentWrap>
      <MembersWrap>
        {members.map((member) => (
          <Member key={member.id} {...member} />
        ))}
      </MembersWrap>
    </MemberSection>
  );
};

const MembersWrap = styled.div`
  width: 84%;
  height: 50%;
  display: grid;
  overflow-y: auto;
  grid-auto-rows: minmax(50%, auto);
  grid-template-columns: repeat(8, 1fr);
  margin-bottom: 6%;
  scroll-snap-type: y mandatory;
`;

const Name = styled.p`
  margin: 0;
  font-size: 25px;
`;

const Profile = styled.div`
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1; // 비율을 결정함
  background-image: url(${({ profile }: { profile: string }) => profile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const RepresentativeStudentWrap = styled.div`
  height: 100%;
  width: 15%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const MemberSection = styled.section`
  width: 100vw;
  height: 80%;
  padding: 0 5%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export default ClubMembers;
