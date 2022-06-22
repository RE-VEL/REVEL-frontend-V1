import styled from '@emotion/styled';

export const InputForm = styled.div`
  width: fit-content;
  display: flex;
  gap: 20px 10px;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  width: 10vw;
  text-align: center;
  font-size: 16px;
`;

export const FormInput = styled.input`
  width: 10vw;
  height: 20px;

  text-align: center;
  font-size: 16px;

  margin: 0;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px gray solid;
  outline: none;
`;

export const SectionLabel = styled.p`
  width: 10vw;
  text-align: center;
  font-size: 16px;
  position: relative;
  margin: 0 0 10px 0;
`;
