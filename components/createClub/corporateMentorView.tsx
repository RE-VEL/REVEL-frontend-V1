import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { mentorHashType } from 'src/interface/corporateMentor';

import {
  FormInput,
  FormLabel,
  InputForm,
  SectionLabel,
} from './inputFormStyle';

interface props {
  mentors: mentorHashType;
  addMentor: () => void;
  changeMentor: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CorporateMentorView: NextPage<props> = ({
  mentors,
  addMentor,
  changeMentor,
}: props) => {
  return (
    <div>
      <SectionLabel>
        기업멘토
        <AddMember onClick={addMentor} />
      </SectionLabel>
      <Members>
        <Form>
          <FormLabel>이름</FormLabel>
          <FormLabel>회사 및 소속</FormLabel>
          <EmailFormLabel>연락처</EmailFormLabel>
        </Form>
        <Mentor>
          {Object.keys(mentors).map((key: string) => (
            <Form key={key}>
              <FormInput
                name={`${key}_name`}
                onChange={changeMentor}
                value={mentors[parseInt(key)].name}
                placeholder="고길동"
                required
              />
              <FormInput
                name={`${key}_company`}
                onChange={changeMentor}
                value={mentors[parseInt(key)].company}
                placeholder="대전적십자회"
                required
              />
              <EmailInput
                name={`${key}_email`}
                onChange={changeMentor}
                value={mentors[parseInt(key)].email}
                placeholder="daemahs@dsm.hs.kr"
                required
              />
              <FormInput
                name={`${key}_phone`}
                onChange={changeMentor}
                value={mentors[parseInt(key)].phone}
                placeholder="042-8282-8282"
                required
              />
            </Form>
          ))}
        </Mentor>
      </Members>
    </div>
  );
};

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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

const Mentor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 65px;
  padding-bottom: 5px;
  overflow-y: auto;
`;

const EmailInput = styled(FormInput)`
  width: 15vw;
`;

const EmailFormLabel = styled(FormLabel)`
  width: 15vw;
`;

const Form = styled(InputForm)`
  flex-direction: row;
`;

export default CorporateMentorView;
