import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { memberType } from 'src/interface/clubMember';
import { FormInput, InputForm, SectionLabel } from '../inputFormStyle';

interface props {
  members: memberType;
  addMember: () => void;
  changeMemberData: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MemberListView = ({ members, addMember, changeMemberData }: props) => {
  return (
    <InputForm>
      <SectionLabel>
        구성원
        <AddMember onClick={addMember} />
      </SectionLabel>
      <Memebrs>
        {Object.keys(members).map((key: string) => (
          <FormInput
            key={key}
            name={key}
            onChange={changeMemberData}
            value={members[parseInt(key)]}
            placeholder="2502 홍길순"
          />
        ))}
      </Memebrs>
    </InputForm>
  );
};

const AddMember = styled.button`
  position: absolute;
  background-color: white;
  background-image: url('/img/plus.svg');
  border-radius: 50%;
  box-shadow: 0 0 4px #00000040;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 30px;
  transform: translate(0, -50%);
  border: none;
  outline: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  padding: 5px;
  cursor: pointer;
`;

const Memebrs = styled.div`
  display: flex;
  width: 45vw;
  max-height: 65px;
  padding-bottom: 5px;
  gap: 20px 20px;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export default MemberListView;
