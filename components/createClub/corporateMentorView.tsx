import styled from '@emotion/styled';
import { NextPage } from 'next';
import { mentorType } from '../../interface/corporateMentor';
import {
  FormInput,
  FormLabel,
  InputForm,
  SectionLabel,
} from './inputFormStyle';

interface props {
  mentors: mentorType[];
  addMentor: () => void;
}

const CorporateMentorView: NextPage<props> = ({
  mentors,
  addMentor,
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
          {mentors.map((mentor: mentorType) => (
            <Form key={mentor.id}>
              <FormInput placeholder="고길동" />
              <FormInput placeholder="대전적십자회" />
              <EmailInput placeholder="daemahs@dsm.hs.kr" />
              <FormInput placeholder="042-8282-8282" />
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
