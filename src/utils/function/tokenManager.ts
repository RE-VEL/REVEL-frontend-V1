import axios from 'axios';
import { TokenObject } from 'src/interface/token';

/**
 * (accessToken, refreshToken)을 받아 localStorage에 각각 저장
 */
export const saveToken = (accessToken: string, refreshToken: string): void => {
  axios.defaults.headers.common.Authorization = 'Bearer ' + accessToken;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

/**
 *  { accessToken, refreshToken } 객체를 반환
 */
export const getToken = (): TokenObject => {
  const accessToken = localStorage.getItem('accessToken') || '';
  const refreshToken = localStorage.getItem('refreshToken') || '';

  return {
    accessToken,
    refreshToken,
  };
};

/**
 *  localStorage에 저장한 토큰을 제거
 */
export const removeToken = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
