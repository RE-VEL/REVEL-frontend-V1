import styled from '@emotion/styled';
import { FormInput, FormLabel, InputForm } from './inputFormStyle';

const Represen = () => {
  return (
    <RepresenInfo>
      <InputForm>
        <FormLabel>창립학기</FormLabel>
        <FormInput placeholder="2022년 1학기" />
      </InputForm>
      <InputForm>
        <FormLabel>대표학생</FormLabel>
        <FormInput placeholder="2501 홍길동" />
      </InputForm>
      <InputForm>
        <FormLabel>지도교사</FormLabel>
        <FormInput placeholder="황희" />
      </InputForm>
    </RepresenInfo>
  );
};

const RepresenInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export default Represen;
