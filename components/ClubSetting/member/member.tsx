import styled from '@emotion/styled';
import { NextPage } from 'next';

const Member: NextPage = ({}) => {
  return (
    <MemberWrap>
      <Profile />
      <Name>{'김순호'}</Name>
      <Major placeholder="분야 입력" />
    </MemberWrap>
  );
};

const Major = styled.input`
  background-color: transparent;
  width: 70%;
  text-align: center;
  font-size: 14px;
  outline: none;
  border: none;
`;

const Name = styled.p`
  font-size: 16px;
  margin: 0;
  margin-top: 5px;
`;

const Profile = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: red;
`;

const MemberWrap = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default Member;
