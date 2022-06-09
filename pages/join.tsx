import styled from '@emotion/styled';
import { kMaxLength } from 'buffer';

const Join = () => {
  const limitNum = () => {};

  return (
    <Outer>
      <Whole>
        <Intro>이메일</Intro>
        <GetEmail
          id="email"
          type="text"
          placeholder="이메일을 입력해 주세요."
        />
        <GetCode type="button" value="인증번호 전송"></GetCode>
        <div>
          <Intro>인증번호 입력</Intro>
          <GetInfo type="number" placeholder="인증번호를 입력해 주세요." />
        </div>
        <div className="password">
          <Intro>비밀번호</Intro>
          <GetInfo
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            maxLength={20}
          />
        </div>
        <div className="phone">
          <Intro>이름</Intro>
          <GetFirst id="firstName" type="text" placeholder="성" />
          <GetRight id="lastName" type="text" placeholder="이름" />
        </div>
        <div className="classnum">
          <Intro>학번</Intro>
          <GetInfo
            id="classnum"
            type="number"
            maxLength={4}
            placeholder="학번을 입력해 주세요."
            min={0}
            max={3420}
          />
        </div>
        <div className="signUp">
          <Joined disabled>가입하기</Joined>
        </div>
      </Whole>
    </Outer>
  );
};

const Outer = styled.div`
  box-sizing: border-box;
  font-size: 11px;
  width: 45%;
  display: flex;
  margin-left: 30%;
  margin-top: 11%;
`;
const GetEmail = styled.input`
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #939393;
  outline: none;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 17px;
  height: 45px;
  width: 80%;
  max-width: 400px;
`;
const GetCode = styled.input`
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
  max-width: 100px;
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
  max-width: 500px;
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
  width: 100%;
  text-align: center;
  font-size: 15px;
`;
const Joined = styled.button`
  background-color: #082d5f;
  color: white;
  margin: 10px;
  margin-top: 3%;
  border: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 10px;
  font-size: 32px;
  height: 55px;
  width: 100%;
  max-width: 500px;
`;

export default Join;
