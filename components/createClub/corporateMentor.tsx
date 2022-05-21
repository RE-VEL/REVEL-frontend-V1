import styled from '@emotion/styled';
import { NextPage } from 'next';

const CorporateMentor: NextPage = () => {
  return (
    <>
      <Mentor>
        <InputForm>
          <FormLabel>이름</FormLabel>
          <FormInput placeholder="고길동" />
        </InputForm>
        <InputForm>
          <FormLabel>회사 및 소속</FormLabel>
          <FormInput placeholder="대전적십자회" />
        </InputForm>
        <InputForm>
          <EmailFormLabel>연락처</EmailFormLabel>
          <Contact>
            <EmailInput placeholder="daemahs@dsm.hs.kr" />
            <FormInput placeholder="042-8282-8282" />
          </Contact>
        </InputForm>
      </Mentor>
    </>
  );
};

const Contact = styled.div`
  display: flex;
  gap: 20px;
`;

const Mentor = styled.div`
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
  position: relative;
`;

const FormInput = styled.input`
  margin: 0;
  width: 10vw;
  text-align: center;
  height: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 1px gray solid;
  padding-bottom: 5px;
  outline: none;
`;

const EmailInput = styled(FormInput)`
  width: 15vw;
`;

const EmailFormLabel = styled(FormLabel)`
  width: 15vw;
`;

export default CorporateMentor;
