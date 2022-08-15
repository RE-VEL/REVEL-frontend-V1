import axios, { AxiosResponse } from 'axios';
import { studentSignupType } from 'src/interface/auth';

export const studentSignup = async (signupInfo: studentSignupType) => {
  try {
    const response: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/signup/student`,
      {
        ...signupInfo,
      },
    );
    console.log('회원가입 성공');
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

const emailCheck = async (email: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/check?email=${email}`,
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getEmailAuthCode = async (email: string) => {
  const res = (await emailCheck(email)).status === 200;
  console.log(res);
  if (res) {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user?email=${email}`,
      );
    } catch (error) {
      throw error;
    }
  }
};
