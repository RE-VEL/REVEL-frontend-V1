import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, FormEvent } from 'react';
import { userInfoType } from 'src/interface/login';

interface props {
  userInfo: userInfoType;
  changeUserInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  submitLog: (e: FormEvent<HTMLFormElement>) => void;
}

const LoginView: NextPage<props> = ({
  userInfo,
  changeUserInfo,
  submitLog,
}: props) => {
  return (
    <Outer>
      <UserInfoForm onSubmit={submitLog}>
        <GetInfo
          type="text"
          placeholder="이메일을 입력해 주세요."
          name="email"
          value={userInfo.email}
          onChange={changeUserInfo}
          required
          minLength={6}
          maxLength={100}
        />
        <GetInfo
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          name="password"
          value={userInfo.password}
          onChange={changeUserInfo}
          required
          minLength={6}
          maxLength={20}
        />
        <SendLog>로그인</SendLog>
      </UserInfoForm>
      <Link href={'/join'}>
        <a>
          <Joined>회원가입</Joined>
        </a>
      </Link>
    </Outer>
  );
};

const UserInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GetInfo = styled.input`
  height: 80px;
  width: 450px;
  padding: 12px 20px;
  margin: 5px;
  border: none;
  border-radius: 10px;
  outline: none;
  box-shadow: 5px 10px 30px 10px #ccc;
  font-size: 20px;
  font-family: Noto Sans CJK KR;
`;

const SendLog = styled.button`
  background-color: #082d5f;
  color: white;
  padding: 14px 20px;
  margin: 8px 5px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 25px;
  font-family: Noto Sans CJK KR;
  height: 80px;
  width: 450px;
`;

const Joined = styled.label`
  color: #433e50;
  border: none;
  margin: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-family: Noto Sans CJK KR;
  width: 100%;
`;

const Outer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

export default LoginView;
