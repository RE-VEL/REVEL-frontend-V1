import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { clubType } from 'src/interface/clubData';
import { FormInput, FormLabel, InputForm } from './inputFormStyle';

interface props {
  clubData: clubType;
  changeClubData: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
}

const Represen: NextPage<props> = ({ clubData, changeClubData }: props) => {
  return (
    <RepresenInfo>
      <InputForm>
        <FormLabel>창립학기</FormLabel>
        <FormInput
          placeholder="2022년 1학기"
          name="founding"
          onChange={changeClubData}
          value={clubData.founding}
        />
      </InputForm>
      <InputForm>
        <FormLabel>대표학생</FormLabel>
        <FormInput
          placeholder="2501 홍길동"
          name="rep"
          onChange={changeClubData}
          value={clubData.rep}
        />
      </InputForm>
      <InputForm>
        <FormLabel>지도교사</FormLabel>
        <FormInput
          placeholder="황희"
          name="teacher"
          onChange={changeClubData}
          value={clubData.teacher}
        />
      </InputForm>
    </RepresenInfo>
  );
};

const RepresenInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export default Represen;
