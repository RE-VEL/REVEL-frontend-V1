import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginDataType, userInfoType } from 'src/interface/login';
import { login } from 'src/utils/apis/login';
import LoginView from '../components/login/loginView';
import Swal from 'sweetalert2';

const Login = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    email: '',
    password: '',
  });

  const router = useRouter();

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

  const throwAlert = () => {
    const Toast = Swal.mixin({
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      position: 'bottom-right',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'error',
      title: '이메일 혹은 비밀번호가\n잘못되었습니다',
    });
  };

  const submitLog = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData: LoginDataType = {
      ...userInfo,
      deviceToken: 'asdfghjkl',
    };

    console.log(loginData);

    const state = await login(loginData);

    if (state === 200) {
      router.push('/');
    } else if (state === 400) {
      throwAlert();
    }
  };

  const props = {
    userInfo,
    changeUserInfo,
    submitLog,
  };

  return <LoginView {...props} />;
};

export default Login;
