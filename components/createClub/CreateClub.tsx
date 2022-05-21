import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import ClubRoom from './clubRoom';
import CorporateMentor from './corporateMentor';
import MemberList from './memberList';
import Represen from './represen';

const CreateClub: NextPage = () => {
  const [content, setContent] = useState<string>('');

  const change = (e: any) => {
    console.log('change');
  };

  return (
    <CreateClubPage>
      <ClubDataForm>
        <ClubName onChange={change} placeholder="동아리명" value="레베리" />
        <Represen />
        <MemberList />
        <CorporateMentor />
        <ClubRoom />
      </ClubDataForm>
      <DocsForm>
        <DocInputField
          onChange={change}
          value={content}
          readOnly={false}
          placeholder="동아리 활동목적을 구체적으로 적어주세요."
        />
        <DocInputField placeholder="동아리 예상 성과물을 작성해 주세요." />
      </DocsForm>
    </CreateClubPage>
  );
};

const ClubDataForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const ClubName = styled.input`
  background-color: none;
  width: 25vw;
  height: 70px;
  border: none;
  border-bottom: 2px solid black;
  font-size: 50px;
  text-align: center;
  color: #5c7cfa;
  outline: 0;
  font-weight: 500;
`;

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
