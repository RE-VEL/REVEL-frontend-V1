import styled from '@emotion/styled';

const Login = () => {
    return 
    <div className='outer'>
            <div>
            <input type="text" placeholder='아이디를 입력해 주세요.' name='uname' aria-required/>
            </div>
            <input type="text" placeholder='비밀번호를 입력해 주세요.' name='psw' aria-required/>
            <div>
            <button type="submit">로그인</button>
            </div>
        <label htmlFor="join"><b>회원가입</b></label>
    </div>
};

const GETINFO = styled.input`
    padding: 12px 20px;
    margin: 5px;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 28px;
    height: 80px;
    width: 100%;
    max-width: 626px;
`;
const SENDLOG = styled.button`
    background-color: #082D5F;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 32px;
    height: 80px;
    width: 100%;
    max-width: 626px;
`;
const JOINED = styled.label`
    color: #433E50;
    border: none;
    margin: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 100%;
`;
const OUTER = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export default Login;