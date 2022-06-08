import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { clubType } from '../../interface/clubData';
import { FormInput, FormLabel, InputForm } from './inputFormStyle';

interface props {
  clubData: clubType;
  changeClubData: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
}

const ClubRoom: NextPage<props> = ({ clubData, changeClubData }: props) => {
  return (
    <Container>
      <InputForm>
        <FormLabel>메모</FormLabel>
        <MemoInput
          name="memo"
          onChange={changeClubData}
          value={clubData.memo}
          placeholder="특이사항이 있다면 적어주세요."
        />
      </InputForm>
      <InputForm>
        <FormLabel>희망 세미나실 1</FormLabel>
        <FormInput
          name="firstDesiredRoom"
          onChange={changeClubData}
          value={clubData.firstDesiredRoom}
          placeholder="세미나실 2-1"
        />
      </InputForm>
      <InputForm>
        <FormLabel>희망 세미나실 2</FormLabel>
        <FormInput
          name="secondDesiredRoom"
          onChange={changeClubData}
          value={clubData.secondDesiredRoom}
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
