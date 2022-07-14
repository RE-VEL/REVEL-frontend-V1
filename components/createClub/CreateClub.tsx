import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import {
  clubDocsValue,
  CreateClubType,
  requestType,
  semesterType,
} from '../../interface/createClub';
import CreateClubView from './CreateClubView';

const CreateClub: NextPage = () => {
  const [request, setRequest] = useState<requestType>({
    establishedYear: `${new Date().getFullYear()}`, //반드시 4글자 숫자
    establishedSemester: 'FIRST', //1학기는 FIRST, 2학기는 SECOND
    name: '',
    teacherEmail: '',
    mentorApplyRequest: [],
    memo: '',
    hope1Room: '',
    hope2Room: '',
    info: '',
    hashTag: '',
    clubType: 'MAJOR',
  });

  const [clubData, setClubData] = useState<CreateClubType>({
    request: request,
    email: '',
  });

  const changeClubData = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    const { value, name } = e.target;

    setClubData({ ...clubData, [name]: value });
  };

  const selectSemester = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target;

    if (value === 'FIRST' || value === 'SECOND') {
      const semester: semesterType = value;
      setRequest({
        ...request,
        establishedSemester: semester,
      });
    }
  };

  const changeClubDoc = (name: string, value: clubDocsValue): void => {
    setClubData({ ...clubData, [name]: value });
  };

  const props = {
    request,
    changeClubData,
    changeClubDoc,
    selectSemester,
  };

  return <CreateClubView {...props} />;
};

export default CreateClub;
