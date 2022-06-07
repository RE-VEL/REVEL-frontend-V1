import styled from '@emotion/styled';
import { FormInput, FormLabel, InputForm } from './inputFormStyle';

const Represen = () => {
  return (
    <RepresenInfo>
      <Form>
        <FormLabel>창립학기</FormLabel>
        <FormInput placeholder="2022년 1학기" />
      </Form>
      <Form>
        <FormLabel>대표학생</FormLabel>
        <FormInput placeholder="2501 홍길동" />
      </Form>
      <Form>
        <FormLabel>지도교사</FormLabel>
        <FormInput placeholder="황희" />
      </Form>
    </RepresenInfo>
  );
};

const RepresenInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Form = styled(InputForm)`
  flex-direction: column;
`;

export default Represen;
