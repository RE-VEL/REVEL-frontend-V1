import styled from '@emotion/styled';
import { NextPage } from 'next';
import { FormInput, FormLabel, InputForm } from './inputFormStyle';

const ClubRoom: NextPage = () => {
  return (
    <Container>
      <InputForm>
        <FormLabel>메모</FormLabel>
        <MemoInput placeholder="특이사항이 있다면 적어주세요." />
      </InputForm>
      <InputForm>
        <FormLabel>희망 세미나실 1</FormLabel>
        <FormInput placeholder="세미나실 2-1" />
      </InputForm>
      <InputForm>
        <FormLabel>희망 세미나실 2</FormLabel>
        <FormInput placeholder="세미나실 2-2" />
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
