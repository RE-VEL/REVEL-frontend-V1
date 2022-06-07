import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { clubType } from '../../interface/clubData';
import ClubRoom from './clubRoom';
import CorporateMentor from './corporateMentor';
import Information from './information';
import MemberList from './memberList';
import Represen from './represen';

interface props {
  clubData: clubType;
  changeClubData: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
}

const CreateClubView: NextPage<props> = ({
  clubData,
  changeClubData,
}: props) => {
  return (
    <CreateClubPage>
      <ClubDataForm>
        <ClubName placeholder="동아리명" />
        <Represen />
        <MemberList />
        <CorporateMentor />
        <ClubRoom clubData={clubData} changeClubData={changeClubData} />
        <Information />
      </ClubDataForm>
      <DocsForm>
        <Textareas>
          <DocInputField
            name="purpose"
            onChange={changeClubData}
            value={clubData.purpose}
            placeholder="동아리 활동목적을 구체적으로 적어주세요."
          />
          <DocInputField
            name="achievement"
            value={clubData.achievement}
            onChange={changeClubData}
            placeholder="동아리 예상 성과물을 작성해 주세요."
          />
        </Textareas>
        <CreateClubBtn>생성요청</CreateClubBtn>
      </DocsForm>
    </CreateClubPage>
  );
};

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

const ClubDataForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
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
  z-index: 101;
  gap: 30px;
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
  z-index: 102;
`;

export default CreateClubView;
