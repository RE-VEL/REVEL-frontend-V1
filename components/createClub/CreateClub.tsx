import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const CreateClub: NextPage = () => {
  const [content, setContent] = useState<string>('');

  const change = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <CreateClubPage>
      <ClubDataForm></ClubDataForm>
      <DocsForm>
        <DocInputField
          onChange={change}
          value={content}
          placeholder="동아리 활동목적을 구체적으로 적어주세요."
        />
        <DocInputField placeholder="동아리 예상 성과물을 작성해 주세요." />
      </DocsForm>
    </CreateClubPage>
  );
};

const ClubDataForm = styled.section``;

const CreateClubPage = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 80px 100px 0 100px;

  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 100px;
  z-index: 100;
`;

const DocsForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  z-index: 101;
`;

const DocInputField = styled.textarea`
  resize: none;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 15px 15px #40404040, 0px 0px 15px #40404020;
  width: 90%;
  height: 30%;
  padding: 20px 30px;
  font-size: 20px;
  z-index: 102;
`;

export default CreateClub;
