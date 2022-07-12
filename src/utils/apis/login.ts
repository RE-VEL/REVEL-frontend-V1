import axios, { AxiosError, AxiosResponse } from 'axios';
import { LoginDataType } from 'src/interface/login';
import { saveToken } from '../function/tokenManager';

export const login = async (loginData: LoginDataType) => {
  try {
    const response: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/login`,
      { ...loginData },
    );

    console.log(response);
    const { accessToken, refreshToken } = response.data;
    saveToken(accessToken, refreshToken);

    return response.status;
  } catch (err: any) {
    return err.response.status;
  }
};
