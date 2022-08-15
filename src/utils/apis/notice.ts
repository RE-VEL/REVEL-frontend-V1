import axios, { AxiosResponse } from 'axios';

export const getNoticeList = async (idx: number) => {
  console.log('111');
  try {
    const response: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice?idx=${idx}&size=8`,
    );

    return response.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
