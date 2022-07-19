import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { clubDocsValue, requestType } from '../../interface/createClub';
import ClubPropertiesView from './clubPropertiesView';

interface props {
  request: requestType;
  selectSemester: (value: ChangeEvent<HTMLSelectElement>) => void;
  selectClubType: (value: ChangeEvent<HTMLSelectElement>) => void;
  changeClubData: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  changeClubDoc: (name: string, value: clubDocsValue | string) => void;
}

const ClubProperties: NextPage<props> = ({
  selectSemester,
  changeClubData,
  changeClubDoc,
  selectClubType,
  request,
}: props) => {
  const formatYear = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();
    const numberValue = parseInt(value);
    const thisYear = new Date().getFullYear();

    // 입력 값이 숫자가 아닌 경우 처리 X
    if (isNaN(Number(value))) return;

    // 입력한 년도가 현재년도보다 크면 현재년도로 값을 강제 변환
    if (numberValue > thisYear) {
      changeClubDoc('establishedYear', String(thisYear));
      return;
    }

    // 입력한 년도가 최소년도보다 크면 최소년도로 값을 강제 변환
    if (value.length === 4 && numberValue < 2015) {
      changeClubDoc('establishedYear', '2015');
      return;
    }

    changeClubDoc('establishedYear', value);
  };

  const props = {
    request,
    selectSemester,
    selectClubType,
    changeClubData,
    formatYear,
  };
  return <ClubPropertiesView {...props} />;
};

export default ClubProperties;
