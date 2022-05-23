import styled from '@emotion/styled';
import { NextPage } from 'next';

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

const InputForm = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormLabel = styled.label`
  width: 10vw;
  text-align: center;
  font-size: 16px;
`;

const FormInput = styled.input`
  width: 10vw;
  text-align: center;
  font-size: 16px;
  border: none;
  border-bottom: 1px gray solid;
  padding-bottom: 5px;
  outline: none;
`;

const MemoInput = styled(FormInput)`
  width: 16vw;
`;

export default ClubRoom;
