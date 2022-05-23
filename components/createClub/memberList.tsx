import styled from '@emotion/styled';
import { useState } from 'react';

interface memberType {
  id: number;
  name: string;
}

const MemberList = () => {
  const [members, setMembers] = useState<memberType[]>([{ id: 0, name: '' }]);

  const addMember = (): void => {
    const id = members[members.length - 1].id + 1;
    setMembers([...members, { id, name: '' }]);
  };

  return (
    <InputForm>
      <FormLabel>
        구성원
        <AddMember onClick={addMember} />
      </FormLabel>
      <Memebrs>
        {members.map((member) => (
          <FormInput key={member.id} placeholder="2502 홍길순" />
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

const InputForm = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormLabel = styled.label`
  width: 10vw;
  text-align: center;
  font-size: 16px;
  position: relative;
`;

const FormInput = styled.input`
  margin: 0;
  width: 10vw;
  text-align: center;
  height: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 1px gray solid;
  padding-bottom: 5px;
  outline: none;
`;

export default MemberList;
