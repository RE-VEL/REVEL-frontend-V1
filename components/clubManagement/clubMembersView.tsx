import styled from '@emotion/styled';
import { NextPage } from 'next';
import Member from './member';

interface member {
  id: number;
  name: string;
  profile: string;
}

interface props {
  RepreStudent: member;
  members: member[];
}

const ClubMembersView: NextPage<props> = ({ RepreStudent, members }: props) => {
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

export default ClubMembersView;
