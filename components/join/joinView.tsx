import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent, FormEvent, LegacyRef } from 'react';
import { studentsignupInfoType } from 'src/interface/auth';

interface props {
  userInfo: studentsignupInfoType;
  changeUserInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  sendEmailAuthCode: () => void;
  join: (e: FormEvent<HTMLFormElement>) => void;
  changeMajor: (e: ChangeEvent<HTMLSelectElement>) => void;
  majorList: string[];
  majorRef: LegacyRef<HTMLSelectElement>;
}

const JoinView: NextPage<props> = ({
  userInfo,
  majorList,
  majorRef,
  changeUserInfo,
  sendEmailAuthCode,
  join,
  changeMajor,
}: props) => {
  return (
    <Outer>
      <Whole onSubmit={join}>
        <GetInfoWrap>
          <Label>이메일</Label>
          <GetEmailWrap>
            <GetEmail>
              <GetEmailInput
                placeholder="이메일을 입력해 주세요."
                name="email"
                required
                value={userInfo.email}
                onChange={changeUserInfo}
              />
              <EmailDomain>@dsm.hs.kr</EmailDomain>
            </GetEmail>
            <GetCode type="button" onClick={sendEmailAuthCode}>
              인증번호 전송
            </GetCode>
          </GetEmailWrap>
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>인증번호 입력</Label>
          <GetInfo
            name="emailAuthCode"
            value={userInfo.emailAuthCode}
            onChange={changeUserInfo}
            placeholder="인증번호를 입력해 주세요."
            minLength={6}
            maxLength={6}
            required
          />
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>비밀번호</Label>
          <GetInfo
            name="password"
            value={userInfo.password}
            onChange={changeUserInfo}
            type="password"
            required
            placeholder="비밀번호를 입력해 주세요."
            minLength={8}
            maxLength={20}
          />
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>비밀번호 확인</Label>
          <PasswordCheck
            userInfo={userInfo}
            name="checkPassword"
            value={userInfo.checkPassword}
            onChange={changeUserInfo}
            type="password"
            required
            placeholder="비밀번호를 입력해 주세요."
            minLength={8}
            maxLength={20}
          />
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>이름</Label>
          <NameInputWrap>
            <GetInfo
              name="firstName"
              value={userInfo.firstName}
              onChange={changeUserInfo}
              placeholder="이름"
            />
            <GetInfo
              name="lastName"
              value={userInfo.lastName}
              onChange={changeUserInfo}
              placeholder="이름"
            />
          </NameInputWrap>
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>전공</Label>
          <GetMajor onChange={changeMajor} ref={majorRef}>
            {majorList.map((major, i) => (
              <option key={i}>{major}</option>
            ))}
          </GetMajor>
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>학번</Label>
          <GetInfo
            name="studentKey"
            value={userInfo.studentKey}
            onChange={changeUserInfo}
            placeholder="학번을 입력해 주세요."
            required
            min={1101}
            max={3420}
          />
        </GetInfoWrap>
        <Joined>가입하기</Joined>
      </Whole>
    </Outer>
  );
};

const GetInfoWrap = styled.div`
  width: 100%;
  height: fit-content;
`;

const Label = styled.p`
  margin: 10px 0 5px 0;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GetInfo = styled.input`
  padding: 0px 20px;
  display: inline-block;
  border: 1px solid #939393;
  outline: none;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 17px;
  height: 45px;
  width: 100%;
`;

const GetMajor = styled.select`
  padding: 0px 20px;
  display: inline-block;
  border: 1px solid #939393;
  outline: none;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 17px;
  height: 45px;
  width: 100%;
  background-color: white;
`;

const NameInputWrap = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
`;

const PasswordCheck = styled(GetInfo)`
  ${({
    userInfo: { password, checkPassword },
  }: {
    userInfo: studentsignupInfoType;
  }) => {
    return (
      password !== checkPassword &&
      `
        border-color: #ff184a;
      `
    );
  }}
`;

const EmailDomain = styled.p`
  margin: 0;
  font-size: 17px;
  height: fit-content;
  color: #808080;
  padding-right: 10px;
`;

const GetEmailWrap = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
`;

const GetEmailInput = styled(GetInfo)`
  width: 80%;
  height: 100%;
  border: none;
  flex: 1 1 auto;
  padding-right: 10px;
`;

const GetEmail = styled.div`
  border: 1px solid #939393;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: none;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const GetCode = styled.button`
  padding: 8px 5px;
  display: inline-block;
  border: 1px solid #939393;
  outline: none;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;
  background-color: #082d5f;
  font-size: 14px;
  height: 45px;
  width: 20%;
  cursor: pointer;
`;

const Whole = styled.form`
  text-align: center;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Joined = styled.button`
  background-color: #082d5f;
  color: white;
  margin-top: 20px;
  border: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 10px;
  font-size: 2vw;
  height: 55px;
  width: 500px;
`;

export default JoinView;
