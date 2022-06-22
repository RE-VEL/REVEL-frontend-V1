import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { clubType } from '../../interface/clubData';

interface props {
  clubData: clubType;
  changeClubData: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
}

const DocsForm: NextPage<props> = ({ clubData, changeClubData }: props) => {
  return (
    <DocsFormSection>
      <Textareas>
        <DocInputField
          name="purpose"
          onChange={changeClubData}
          value={clubData.purpose}
          spellCheck="false"
          placeholder="동아리 활동목적을 구체적으로 적어주세요."
        />
        <DocInputField
          name="achievement"
          value={clubData.achievement}
          onChange={changeClubData}
          spellCheck="false"
          placeholder="동아리 예상 성과물을 작성해 주세요."
        />
      </Textareas>
      <CreateClubBtn>생성요청</CreateClubBtn>
    </DocsFormSection>
  );
};

const DocsFormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const CreateClubBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #87a4c5;
  align-self: flex-end;
  margin-right: 3vw;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

const Textareas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DocInputField = styled.textarea`
  resize: none;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 15px 15px #40404040, 0px 0px 15px #40404020;
  width: 30vw;
  height: 30vh;
  padding: 20px 30px;
  font-size: 20px;
  outline: none;
`;

export default DocsForm;
