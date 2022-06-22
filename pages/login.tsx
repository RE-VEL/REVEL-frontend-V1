import styled from '@emotion/styled';

const Login = () => {
  return (
    <Outer className="outer">
      <GetInfo
        type="text"
        placeholder="아이디를 입력해 주세요."
        name="uname"
        aria-required
      />
      <Data>
        <GetInfo
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          name="psw"
          aria-required
        />
      </Data>
      <div>
        <SendLog type="submit">로그인</SendLog>
      </div>
      <Joined>
        <b>회원가입</b>
      </Joined>
    </Outer>
  );
};

const GetInfo = styled.input`
  padding: 12px 20px;
  margin: 5px;
  margin-left: 2%;
  display: inline-block;
  border: none;
  outline: none;
  box-shadow: 5px 10px 30px 10px #ccc;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 28px;
  height: 80px;
  width: 100%;
  max-width: 626px;
`;
const SendLog = styled.button`
  background-color: #082d5f;
  color: white;
  padding: 14px 20px;
  margin: 8px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 32px;
  height: 80px;
  width: 100%;
  max-width: 626px;
`;
const Joined = styled.label`
  color: #433e50;
  border: none;
  margin-left: 43%;
  cursor: pointer;
  width: 100%;
`;
const Outer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Data = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export default Login;

