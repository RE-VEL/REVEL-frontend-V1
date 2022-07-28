import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';

import { requestType } from 'src/interface/createClub';
import { FormInput, FormLabel, InputForm } from './inputFormStyle';

interface props {
  request: requestType;
  changeClubData: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
}

const ClubRoom: NextPage<props> = ({ request, changeClubData }: props) => {
  return (
    <Container>
      <InputForm>
        <FormLabel>메모</FormLabel>
        <MemoInput
          name="memo"
          onChange={changeClubData}
          value={request.memo}
          required
          placeholder="특이사항이 있다면 적어주세요."
        />
      </InputForm>
      <InputForm>
        <FormLabel>희망 세미나실 1</FormLabel>
        <FormInput
          required
          name="hope1Room"
          onChange={changeClubData}
          value={request.hope1Room}
          placeholder="세미나실 2-1"
        />
      </InputForm>
      <InputForm>
        <FormLabel>희망 세미나실 2</FormLabel>
        <FormInput
          required
          name="hope2Room"
          onChange={changeClubData}
          value={request.hope2Room}
          placeholder="세미나실 2-2"
        />
      </InputForm>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  gap: 20px;
`;

const MemoInput = styled(FormInput)`
  width: 16vw;
`;

export default ClubRoom;
