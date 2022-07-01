import axios, { AxiosResponse } from 'axios';
import { studentSignupType } from 'interface/auth';

export const studentSignup = async (signupInfo: studentSignupType) => {
  try {
    const response: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/signup/student`,
      {
        ...signupInfo,
      },
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
