import axios, { AxiosResponse } from 'axios';
import { LoginDataType } from 'src/interface/login';
import { saveToken } from '../function/tokenManager';

export const login = async (loginData: LoginDataType) => {
  const response: AxiosResponse = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/login`,
    { ...loginData },
  );

  const { accessToken, refreshToken } = response.data;
  saveToken(accessToken, refreshToken);
};
