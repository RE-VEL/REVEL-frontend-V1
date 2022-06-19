import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

interface props {
  name: string;
  profile: string;
  major: string;
}

const Member: NextPage<props> = ({ name, profile, major: major_ }: props) => {
  const [major, setMajor] = useState<string>(major_);

  const changeMajor = (e: ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value);
  };

  return (
    <MemberWrap>
      <Profile profile={profile} />
      <Name>{name}</Name>
      <Major placeholder="분야 입력" value={major} onChange={changeMajor} />
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

  background-image: url(${({ profile }: { profile: string }) => profile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
