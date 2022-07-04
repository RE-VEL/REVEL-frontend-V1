import { NextPage } from 'next';
import { ChangeEvent, FormEvent, useState } from 'react';
import JoinView from 'components/join/joinView';
import { signupInfoType, studentSignupType } from 'src/interface/auth';
import { getEmailAuthCode } from 'src/utils/apis/signup';

const Join: NextPage = () => {
  const [userInfo, setUserInfo] = useState<signupInfoType>({
    email: '',
    emailAuthCode: '',
    firstName: '',
    lastName: '',
    password: '',
    studentKey: '',
    major: '',
    checkPassword: '',
  });

  const formatInputValue = (value: string, name: string): string => {
    if (name === 'email' || name === 'firstName' || name === 'lastName') {
      return value.replace(/\W/, '');
    }
    if (name === 'password' || name === 'checkPassword') {
      return value.replace(/[^\w!@#$_\-\.,?]/, '');
    }
    if (name === 'emailAuthCode' || name === 'studentKey') {
      return value.replace(/\D/, '');
    }

    throw new Error('허용되지 않은 name value');
  };

  const changeUserInfo = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    const newValue = formatInputValue(value, name);

    setUserInfo((pre) => ({ ...pre, [name]: newValue }));
  };

  const sendEmailAuthCode = (): void => {};

  const join = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(userInfo);
    if (userInfo.password !== userInfo.checkPassword) {
      alert('비밀번호가 동일하지 않습니다');
      return;
    }

    getEmailAuthCode('artns25@dsm.hs.kr');
  };

  const props = {
    userInfo,
    changeUserInfo,
    sendEmailAuthCode,
    join,
  };

  return <JoinView {...props} />;
};

export default Join;
