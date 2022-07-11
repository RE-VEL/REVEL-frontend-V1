import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginDataType, userInfoType } from 'src/interface/login';
import { login } from 'src/utils/apis/login';
import LoginView from '../components/login/loginView';

const Login = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    email: '',
    password: '',
  });

  const changeUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'email') {
      newValue = newValue.replace(/[^\w@\.]/, '');
    } else if (name === 'password') {
      newValue = newValue.replace(/[^\w!@#$_\-\.,?]/, '');
    }

    setUserInfo((pre) => ({ ...pre, [name]: newValue }));
  };

  const submitLog = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData: LoginDataType = {
      ...userInfo,
      deviceToken: 'asdfghjkl',
    };

    console.log(loginData);

    login(loginData);
  };

  const props = {
    userInfo,
    changeUserInfo,
    submitLog,
  };

  return <LoginView {...props} />;
};

export default Login;
