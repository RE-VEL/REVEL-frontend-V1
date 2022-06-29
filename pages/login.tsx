import { ChangeEvent, FormEvent, useState } from 'react';
import LoginView from '../components/login.loginView';
import { userInfoType } from '../interface/login';

const Login = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    uId: '',
    pw: '',
  });

  const changeUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'uId') {
      newValue = newValue.replace(/[^\w_]/, '');
    } else if (name === 'pw') {
      newValue = newValue.replace(/[^\w!@#$_\-\.,?]/, '');
    }

    setUserInfo((pre) => ({ ...pre, [name]: newValue }));
  };

  const submitLog = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const props = {
    userInfo,
    changeUserInfo,
    submitLog,
  };

  return <LoginView {...props} />;
};

export default Login;
