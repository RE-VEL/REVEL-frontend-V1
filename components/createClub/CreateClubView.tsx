import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { clubDocsValue, requestType } from '../../interface/createClub';
import ClubRoom from './clubRoom';
import CorporateMentor from './corporateMentor';
import DocsForm from './DocsForm';
import Information from './information';
import MemberList from './memberList';
import Represen from './represen';

interface props {
  request: requestType;
  changeClubData: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  changeClubDoc: (name: string, value: clubDocsValue) => void;
  selectSemester: (value: ChangeEvent<HTMLSelectElement>) => void;
}

const CreateClubView: NextPage<props> = ({
  request,
  changeClubData,
  changeClubDoc,
  selectSemester,
}: props) => {
  return (
    <CreateClubPage>
      <ClubDataForm>
        <ClubName
          placeholder="동아리명"
          name="clubName"
          onChange={changeClubData}
          value={request.name}
        />
        <Represen
          request={request}
          selectSemester={selectSemester}
          changeClubData={changeClubData}
        />
        <MemberList changeClubDoc={changeClubDoc} />
        <CorporateMentor changeClubDoc={changeClubDoc} />
        <ClubRoom request={request} changeClubData={changeClubData} />
        <Information />
      </ClubDataForm>
      <DocsForm request={request} changeClubData={changeClubData} />
    </CreateClubPage>
  );
};

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

export default CreateClubView;
