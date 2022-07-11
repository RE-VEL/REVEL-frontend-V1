import axios, { AxiosError, AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = await localStorage.getItem('accessToken');
    accessToken
      ? (config.headers = {
          Authorization: `Bearer ${accessToken}`,
        })
      : null;
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    if (axios.isAxiosError(error) && error.response) {
    } else {
      return Promise.reject(error);
    }
  },
);
