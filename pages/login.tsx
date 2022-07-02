import styled from '@emotion/styled';

const Login = () => {
  return (
    <Outer className="outer">
      <div>
        <GetInfo
          type="text"
          placeholder="아이디를 입력해 주세요."
          name="uname"
          aria-required
        />
      </div>
      <GetInfo
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        name="psw"
        aria-required
      />
      <div>
        <SendLog type="submit">로그인</SendLog>
      </div>
      <Joined>회원가입</Joined>
    </Outer>
  );
};

const GetInfo = styled.input`
  padding: 12px 20px;
  margin: 5px;
  display: inline-block;
  border: none;
  outline: none;
  box-shadow: 5px 10px 30px 10px #ccc;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 20px;
  font-family: Noto Sans CJK KR;
  height: 80px;
  width: 450px;
  max-width: 626px;
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
  max-width: 626px;
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
`;
export default Login;