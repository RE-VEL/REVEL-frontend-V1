import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { requestType } from 'src/interface/createClub';
import { FormInput, FormLabel, InputForm } from './inputFormStyle';

interface props {
  request: requestType;
  selectSemester: (value: ChangeEvent<HTMLSelectElement>) => void;
  selectClubType: (value: ChangeEvent<HTMLSelectElement>) => void;
  formatYear: (e: ChangeEvent<HTMLInputElement>) => void;
  formatHashTag: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClubPropertiesView: NextPage<props> = ({
  request,
  selectSemester,
  selectClubType,
  formatYear,
  formatHashTag,
}: props) => {
  return (
    <PropertiesInfo>
      <InputForm>
        <PropertiesLabel>창립년도</PropertiesLabel>
        <YearInput
          required
          placeholder="2015"
          name="establishedYear"
          value={request.establishedYear}
          onChange={formatYear}
          minLength={4}
          maxLength={4}
        />
      </InputForm>
      <InputForm>
        <PropertiesLabel>창립학기</PropertiesLabel>
        <SelectWrap>
          <SelectSemester onChange={selectSemester}>
            <option value={'FIRST'}>1학기</option>
            <option value={'SECOND'}>2학기</option>
          </SelectSemester>
        </SelectWrap>
      </InputForm>
      <InputForm>
        <PropertiesLabel>동아리 종류</PropertiesLabel>
        <SelectWrap>
          <SelectSemester onChange={selectClubType}>
            <option value={'MAJOR'}>전공</option>
            <option value={'AUTO'}>자율</option>
            <option value={'CREATIVE'}>창체</option>
          </SelectSemester>
        </SelectWrap>
      </InputForm>
      <InputForm>
        <PropertiesLabel>해시태그</PropertiesLabel>
        <YearInput
          placeholder="web"
          required
          name="hashTag"
          value={request.hashTag}
          onChange={formatHashTag}
        />
      </InputForm>
    </PropertiesInfo>
  );
};

const PropertiesInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const PropertiesLabel = styled(FormLabel)`
  width: 5vw;
`;

const YearInput = styled(FormInput)`
  width: 5vw;
`;

const SelectWrap = styled.div`
  border-bottom: 1px gray solid;
`;

const SelectSemester = styled.select`
  height: 20px;
  width: 100%;

  text-align: center;
  font-size: 16px;

  border-radius: 0;

  box-shadow: none;
  margin: 0;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
`;

export default ClubPropertiesView;
