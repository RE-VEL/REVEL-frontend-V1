import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import JoinView from '../components/join/joinView';
import { userInfoType } from '../interface/join';

const Join: NextPage = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    email: '',
    password: '',
    checkPassword: '',
    name: '',
    number: '',
    certification: '',
  });

  const formatInputValue = (value: string, name: string): string => {
    if (name === 'email' || name === 'name') {
      return value.replace(/\W/, '');
    }
    if (name === 'password' || name === 'checkPassword') {
      return value.replace(/[^\w!@#$_\-\.,?]/, '');
    }
    if (name === 'certification' || name === 'number') {
      return value.replace(/\D/, '');
    }

    throw new Error('허용되지 않은 name value');
  };

  const changeUserInfo = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    const newValue = formatInputValue(value, name);

    setUserInfo((pre) => ({ ...pre, [name]: newValue }));
  };

  const sendVerificationCode = (): void => {};

  const join = (): void => {
    console.log(userInfo);
  };

  const props = {
    userInfo,
    changeUserInfo,
    sendVerificationCode,
    join,
  };

  return <JoinView {...props} />;
};

export default Join;
