import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';

interface props {
  maxNum: number;
  keyName: string;
  changeInterTime: (name: string, value: number) => void;
}

const DateInput: NextPage<props> = ({
  maxNum,
  keyName,
  changeInterTime,
}: props) => {
  const [data, setData] = useState<number>(0);

  const changeData = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);

    if (!isNaN(newValue) && !(newValue >= maxNum || newValue < 0)) {
      setData(newValue);
    }
  };

  useEffect(() => {
    changeInterTime(keyName, data);
  }, [data]);

  return <Input onChange={changeData} value={data} />;
};

const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #202020;
  width: 70px;
  height: 30px;
  font-size: 16px;
  text-align: right;
`;

export default DateInput;
