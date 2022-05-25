import styled from '@emotion/styled';

const Join = () => {
  return (
    <Outer className="whole">
      <Whole className="outer">
        <TopInput className="email">
          <h3>이메일</h3>
          <GetInfo
            id="email"
            type="text"
            placeholder="이메일을 입력해 주세요."
          />
          <div id="emailError" className="error"></div>
          <div className="code">
            <h3>인증번호 입력</h3>
            <GetInfo
              id="code"
              type="text"
              placeholder="인증번호를 입력해 주세요."
            />
            <div id="nameError" className="error"></div>
          </div>
          <div className="password">
            <h3>비밀번호</h3>
            <GetInfo
              id="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
            />
            <div id="passwordError" className="error"></div>
          </div>
          <div className="phone">
            <h3>이름</h3>
            <GetInfo id="firstName" type="text" placeholder="성" />
            <GetInfo id="lastName" type="text" placeholder="이름" />
          </div>
          <div className="classnum">
            <h3>학번</h3>
            <GetInfo
              id="classnum"
              type="text"
              placeholder="학번을 입력해 주세요."
            />
            <div id="classnumError" className="error"></div>
          </div>
        </TopInput>
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
  vertical-align: middle;
  margin: 30%;
`;
const TopInput = styled.div`
  width: 100%;
`;
const GetInfo = styled.input`
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #939393;
  outline: none;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 17px;
  height: 55px;
  width: 100%;
  max-width: 700px;
`;
const Whole = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
`;
const Joined = styled.button`
  background-color: #082d5f;
  color: white;
  margin: 10px;
  border: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 10px;
  font-size: 32px;
  height: 60px;
  width: 100%;
  max-width: 700px;
`;

/*function changeName1():
  | import('react').FormEventHandler<HTMLInputElement>
  | undefined {
  throw new Error('Function not implemented.');
}
function signUpCheck():
  | import('react').MouseEventHandler<HTMLButtonElement>
  | undefined {
  throw new Error('Function not implemented.');
}*/
export default Join;
