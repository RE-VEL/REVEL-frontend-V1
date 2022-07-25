import styled from '@emotion/styled';
import { NextPage } from 'next';

interface props {
  name: string;
  profile: string;
}

const Member: NextPage<props> = ({ name, profile }: props) => {
  return (
    <MemberWrap>
      <Profile profile={profile} />
      <Name>{name}</Name>
    </MemberWrap>
  );
};

const Name = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const Profile = styled.div`
  width: 65%;
  aspect-ratio: 1; // 비율을 결정함
  background-image: url(${({ profile }: { profile: string }) => profile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

const MemberWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  scroll-snap-align: center;
  justify-content: center;
`;

export default Member;
