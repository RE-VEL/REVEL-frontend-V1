import styled from '@emotion/styled';

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

export default Represen;
