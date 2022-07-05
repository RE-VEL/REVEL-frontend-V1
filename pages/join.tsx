import { NextPage } from 'next';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import JoinView from 'components/join/joinView';
import { studentsignupInfoType, studentSignupType } from 'src/interface/auth';
import { getEmailAuthCode, studentSignup } from 'src/utils/apis/signup';

const majorList = [
  '미정',
  'front-end',
  'back-end',
  'android',
  'ios',
  'AI',
  'security',
  'game',
  'embedded',
  'design',
  '기타',
];

const Join: NextPage = () => {
  const [userInfo, setUserInfo] = useState<studentsignupInfoType>({
    email: '',
    emailAuthCode: '',
    firstName: '',
    lastName: '',
    password: '',
    studentKey: '',
    checkPassword: '',
  });
  const majorRef = useRef<HTMLSelectElement>(null);

  const formatInputValue = (value: string, name: string): string => {
    value = value.replace(/\s/, '');

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

  const changeMajor = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target;
    console.log(value);
  };

  const sendEmailAuthCode = (): void => {
    getEmailAuthCode('artns25@dsm.hs.kr');
  };

  const join = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // console.log(userInfo);
    // console.log(majorRef.current?.value);

    if (userInfo.password !== userInfo.checkPassword) {
      alert('비밀번호가 동일하지 않습니다');
      return;
    }

    const major: string = majorRef.current?.value || majorList[0];

    const signupData: studentSignupType = {
      email: userInfo.email,
      emailAuthCode: userInfo.emailAuthCode,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      password: userInfo.password,
      studentKey: userInfo.studentKey,
      major: major,
    };

    const res = studentSignup(signupData);
    console.log(res);
  };

  const props = {
    userInfo,
    majorList,
    majorRef,
    changeUserInfo,
    sendEmailAuthCode,
    join,
    changeMajor,
  };

  return <JoinView {...props} />;
};

export default Join;
