import { NextPage } from 'next';

const Login: NextPage = () => {
    return <div id="id01" className='modal'>
        <form className='modal-content animate'>
            <input type="text" placeholder='아이디를 입력해 주세요.' name='uname' aria-required/>
            <input type="text" placeholder='비밀번호를 입력해 주세요.' name='psw' aria-required/>
            <button type="submit">로그인</button>
        </form>
        <label htmlFor="join"><b>회원가입</b></label>
    </div>
};

export default Login;