import styled from '@emotion/styled';
import { NextPage } from 'next';
import { FormInput, FormLabel, InputForm } from './inputFormStyle';

const ClubRoom: NextPage = () => {
  return (
    <Container>
      <Form>
        <FormLabel>메모</FormLabel>
        <MemoInput placeholder="특이사항이 있다면 적어주세요." />
      </Form>
      <Form>
        <FormLabel>희망 세미나실 1</FormLabel>
        <FormInput placeholder="세미나실 2-1" />
      </Form>
      <Form>
        <FormLabel>희망 세미나실 2</FormLabel>
        <FormInput placeholder="세미나실 2-2" />
      </Form>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  gap: 20px;
`;

const Form = styled(InputForm)`
  flex-direction: column;
`;

const MemoInput = styled(FormInput)`
  width: 16vw;
`;

export default ClubRoom;
