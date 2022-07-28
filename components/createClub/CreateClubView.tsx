import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent, FormEvent } from 'react';
import { clubDocsValue, clubType } from 'src/interface/clubData';
import { requestType } from 'src/interface/createClub';
import ClubProperties from './clubProperties';

import ClubRoom from './clubRoom';
import CorporateMentor from './corporateMentor';
import DocsForm from './DocsForm';
import Information from './information';
import Represen from './represen';

interface props {
  request: requestType;
  changeClubData: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  changeClubDoc: (name: string, value: clubDocsValue | string) => void;
  selectSemester: (value: ChangeEvent<HTMLSelectElement>) => void;
  selectClubType: (value: ChangeEvent<HTMLSelectElement>) => void;
  submit: (e: FormEvent<HTMLFormElement>) => void;
}

const CreateClubView: NextPage<props> = ({
  request,
  changeClubData,
  changeClubDoc,
  selectSemester,
  selectClubType,
  submit,
}: props) => {
  return (
    <CreateClubPage onSubmit={submit}>
      <ClubDataForm>
        <ClubName
          placeholder="동아리명"
          name="name"
          required
          onChange={changeClubData}
          value={request.name}
        />
        <ClubProperties
          changeClubDoc={changeClubDoc}
          request={request}
          selectSemester={selectSemester}
          changeClubData={changeClubData}
          selectClubType={selectClubType}
        />
        <Represen request={request} changeClubDoc={changeClubDoc} />
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

const CreateClubPage = styled.form`
  width: 100vw;
  height: 100vh;
  padding: 80px 100px 0 100px;

  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 100px;
  z-index: 100;
`;

export default CreateClubView;
