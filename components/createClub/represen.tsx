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
}

const Represen: NextPage<props> = ({ request, changeClubData }: props) => {
  return (
    <RepresenInfo>
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

export default Represen;
