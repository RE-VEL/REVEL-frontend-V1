import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { requestType } from '../../interface/createClub';
import { FormInput, FormLabel, InputForm } from './inputFormStyle';

interface props {
  request: requestType;
  changeClubData: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  selectSemester: (value: ChangeEvent<HTMLSelectElement>) => void;
}

const Represen: NextPage<props> = ({
  request,
  changeClubData,
  selectSemester,
}: props) => {
  return (
    <RepresenInfo>
      <InputForm>
        <SelectLabel>창립학기</SelectLabel>
        <SelectWrap>
          <SelectSemester onChange={selectSemester}>
            <option value={'FIRST'}>1학기</option>
            <option value={'SECOND'}>2학기</option>
          </SelectSemester>
        </SelectWrap>
      </InputForm>
      <InputForm>
        <TeacherEmailLabel>지도교사 이메일</TeacherEmailLabel>
        <TeacherEmail
          placeholder="teacher12@dsm.hs.kr"
          name="teacherEmail"
          onChange={changeClubData}
          value={request.teacherEmail}
        />
      </InputForm>
    </RepresenInfo>
  );
};

const SelectLabel = styled(FormLabel)`
  width: 5vw;
`;

const TeacherEmail = styled(FormInput)`
  width: 15vw;
`;

const TeacherEmailLabel = styled(FormLabel)`
  width: 15vw;
`;

const RepresenInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const SelectWrap = styled.div`
  border-bottom: 1px gray solid;
`;

const SelectSemester = styled.select`
  height: 20px;
  width: 100%;

  text-align: center;
  font-size: 16px;

  /* text-align-last: center;
  text-align: center;
  -ms-text-align-last: center;
  -moz-text-align-last: center; */

  border-radius: 0;

  box-shadow: none;
  margin: 0;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
`;

export default Represen;
