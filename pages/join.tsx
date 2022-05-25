import styled from '@emotion/styled';

const Join = () => {
  return (
    <Outer>
      <Whole>
        <ClassNum>이메일</ClassNum>
        <GetInfo id="email" type="text" placeholder="이메일을 입력해 주세요." />
        <div>
          <ClassNum>인증번호 입력</ClassNum>
          <GetInfo
            id="code"
            type="text"
            placeholder="인증번호를 입력해 주세요."
          />
        </div>
        <div className="password">
          <ClassNum>비밀번호</ClassNum>
          <GetInfo
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
          />
          <div id="passwordError" className="error"></div>
        </div>
        <div className="phone">
          <ClassNum>이름</ClassNum>
          <GetFirst id="firstName" type="text" placeholder="성" />
          <GetRight id="lastName" type="text" placeholder="이름" />
        </div>
        <div className="classnum">
          <ClassNum>학번</ClassNum>
          <GetInfo
            id="classnum"
            type="text"
            placeholder="학번을 입력해 주세요."
          />
          <div id="classnumError" className="error"></div>
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
const ClassNum = styled.h4`
  margin-left: 100px;
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
