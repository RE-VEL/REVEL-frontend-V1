import styled from '@emotion/styled';
import { NextPage } from 'next';

const MemberSection: NextPage = () => {
  return <MemberWrap></MemberWrap>;
};

const MemberWrap = styled.section`
  width: 100%;
  height: 45%;
  background-color: white;
`;

export default MemberSection;
