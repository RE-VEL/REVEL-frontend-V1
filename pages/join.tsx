import styled from '@emotion/styled';
import { NextPage } from 'next';

const Join: NextPage = () => {
  return (
    <Outer>
      <Whole>
        <GetInfoWrap>
          <Label>이메일</Label>
          <GetEmailWrap>
            <GetEmail>
              <GetEmailInput id="email" placeholder="이메일을 입력해 주세요." />
              <EmailDomain>@dsm.hs.kr</EmailDomain>
            </GetEmail>
            <GetCode>인증번호 전송</GetCode>
          </GetEmailWrap>
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>인증번호 입력</Label>
          <GetInfo
            id="code"
            type="number"
            placeholder="인증번호를 입력해 주세요."
          />
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>비밀번호</Label>
          <GetInfo
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
          />
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>이름</Label>
          <GetInfo id="firstName" type="text" placeholder="이름" />
        </GetInfoWrap>
        <GetInfoWrap>
          <Label>학번</Label>
          <GetInfo
            id="classnum"
            type="number"
            placeholder="학번을 입력해 주세요."
          />
        </GetInfoWrap>
        <Joined disabled>가입하기</Joined>
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
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #939393;
  outline: none;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 17px;
  height: 45px;
  width: 100%;
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
`;

const GetFirst = styled.input`
  padding: 12px 20px;
  margin-right: 20px;
  display: inline-block;
  border: 1px solid #939393;
  outline: none;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 17px;
  height: 45px;
  width: 46%;
  max-width: 240px;
`;

const GetRight = styled.input`
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #939393;
  outline: none;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 17px;
  height: 45px;
  width: 46%;
  max-width: 240px;
`;

const Intro = styled.h4`
  margin-left: 15%;
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  float: left;
  width: 100%;
`;

const Whole = styled.div`
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
  /* width: 100%; */
  width: 500px;
`;

export default Join;
