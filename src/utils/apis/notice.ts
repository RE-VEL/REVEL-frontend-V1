import axios, { AxiosResponse } from 'axios';

export const getNoticeList = async (idx: number) => {
  try {
    const response: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice?idx=${idx}&size=8`,
    );

    return response.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getNotice = async (id: string) => {
  try {
    const response: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice/${id}`,
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
