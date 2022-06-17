import styled from '@emotion/styled';
import { NextPage } from 'next';

interface props {
  profile: string;
  name: string;
  major: string;
}

const ClubMember: NextPage<props> = ({ profile, name, major }: props) => {
  return (
    <MemberWrap>
      <Profle profile={profile} />
      <Name>{name}</Name>
      <Major>#{major}</Major>
    </MemberWrap>
  );
};

const Name = styled.p`
  margin: 0;
  color: #002c63;
  font-size: 18px;
  font-weight: 600;
  margin-top: 5px;
`;

const Major = styled.p`
  margin: 0;
  color: #002e63;
  font-size: 14px;
`;

const Profle = styled.div`
  width: 80px;
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ profile }: { profile: string }) => profile});
`;

const MemberWrap = styled.div`
  width: 100px;
  height: 100%;
  padding: 10px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ClubMember;
