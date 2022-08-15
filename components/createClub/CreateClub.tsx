import { NextPage } from 'next';
import { ChangeEvent, FormEvent, useState } from 'react';
import { clubDocsValue } from 'src/interface/clubData';
import { clubType, requestType, semesterType } from 'src/interface/createClub';

import CreateClubView from './CreateClubView';

const CreateClub: NextPage = () => {
  const [request, setRequest] = useState<requestType>({
    establishedYear: '', //반드시 4글자 숫자
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

  const changeClubData = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    const { value, name } = e.target;

    setRequest({ ...request, [name]: value });
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

  const selectClubType = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (value === 'MAJOR' || value === 'AUTO' || value === 'CREATIVE') {
      const clubType: clubType = value;

      setRequest({
        ...request,
        clubType,
      });
    }
  };

  const changeClubDoc = (name: string, value: clubDocsValue | string): void => {
    setRequest({ ...request, [name]: value });
  };

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(request);
  };

  const props = {
    request,
    changeClubData,
    changeClubDoc,
    selectSemester,
    selectClubType,
    submit,
  };

  return <CreateClubView {...props} />;
};

export default CreateClub;
