import styled from '@emotion/styled';
import { NextPage } from 'next';
import { applicantType } from '../../../interface/applicant';

const AppliedForClub: NextPage<applicantType> = ({
  id,
  name,
  interviewDay,
  interviewCompleted,
}: applicantType) => {
  const Btn: NextPage = () => {
    return interviewCompleted ? (
      <BtnWrap>
        <PassBtn>합격</PassBtn>
        <NotBtn>불합격</NotBtn>
      </BtnWrap>
    ) : (
      <InterDate>
        {`${interviewDay.month}월 ${interviewDay.date}일 ${interviewDay.hours}시 ${interviewDay.minute}분`}
      </InterDate>
    );
  };

  return (
    <ApplicantContainer>
      <ApplicantName>{name}</ApplicantName>
      <InterviewBtnWrap>
        <Btn />
      </InterviewBtnWrap>
    </ApplicantContainer>
  );
};

const InterDate = styled.p`
  margin: 0;
  color: #8fa4bb;
  font-size: 18px;
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 5px;
`;

const PassBtn = styled.button`
  width: 55px;
  height: 30px;
  background-color: #87a4c5;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
`;

const NotBtn = styled(PassBtn)`
  background-color: #002e63;
`;

const InterviewBtnWrap = styled.div`
  width: fit-content;
  height: fit-content;
`;

const ApplicantName = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
`;

const ApplicantContainer = styled.div`
  width: 100%;
  height: 70px;
  border: solid 1px #87a4c5;
  background-color: #ffffff;
  margin-left: -1px;
  margin-top: -1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
`;

export default AppliedForClub;
