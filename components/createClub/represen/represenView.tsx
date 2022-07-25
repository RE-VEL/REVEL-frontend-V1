import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { requestType } from 'src/interface/createClub';
import { FormInput, FormLabel, InputForm } from '../inputFormStyle';

interface props {
  request: requestType;
  formatTeacherEmail: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RepresenView: NextPage<props> = ({
  request,
  formatTeacherEmail,
}: props) => {
  return (
    <RepresenInfo>
      <InputForm>
        <TeacherEmailLabel>지도교사 이메일</TeacherEmailLabel>
        <TeacherEmail
          required
          placeholder="teacher12@dsm.hs.kr"
          name="teacherEmail"
          onChange={formatTeacherEmail}
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

export default RepresenView;
