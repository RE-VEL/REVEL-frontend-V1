import styled from '@emotion/styled';
import { NextPage } from 'next';

const ClubMembers: NextPage = () => {
  return <MemberSection></MemberSection>;
};

const MemberSection = styled.section`
  background-color: yellow;
  width: 100vw;
  height: 80%;
`;

export default ClubMembers;
