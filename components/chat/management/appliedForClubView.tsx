import styled from '@emotion/styled';
import { NextPage } from 'next';
import { applicantType } from 'src/interface/applicant';
import { interTimeType } from 'src/interface/interTime';
import DateInput from './dateInput';

interface props extends applicantType {
  interTime: interTimeType;
  changeInterTime: (name: string, value: number) => void;
  showInterInput: boolean;
  changeShowInterInputState: () => void;
  submitInterTime: () => void;
}

const AppliedForClubView: NextPage<props> = ({
  id,
  name,
  interviewDay,
  interviewCompleted,
  interTime,
  changeInterTime,
  showInterInput,
  changeShowInterInputState,
  submitInterTime,
}: props) => {
  const Btn: NextPage = () => {
    if (interviewCompleted === true) {
      return (
        <BtnWrap>
          <PassBtn>합격</PassBtn>
          <NotBtn>불합격</NotBtn>
        </BtnWrap>
      );
    } else if (interviewCompleted === false) {
      return (
        <InterDate>
          {`${interviewDay.month}월 ${interviewDay.date}일 ${interviewDay.hours}시 ${interviewDay.minute}분`}
        </InterDate>
      );
    } else if (interviewCompleted === null) {
      return (
        <SetInterDateContainer>
          <SetInterDate onClick={changeShowInterInputState}>
            면접일 지정
          </SetInterDate>
          {showInterInput && (
            <SetDateModal>
              <DateInputWrap>
                <div>
                  <DateInput
                    maxNum={24}
                    keyName={'month'}
                    changeInterTime={changeInterTime}
                  />
                  월
                </div>
                <div>
                  <DateInput
                    maxNum={60}
                    keyName={'day'}
                    changeInterTime={changeInterTime}
                  />
                  일
                </div>
              </DateInputWrap>
              <TimeInputWrap>
                <div>
                  <DateInput
                    maxNum={24}
                    keyName={'hour'}
                    changeInterTime={changeInterTime}
                  />
                  시
                </div>
                <div>
                  <DateInput
                    maxNum={60}
                    keyName={'min'}
                    changeInterTime={changeInterTime}
                  />
                  분
                </div>
              </TimeInputWrap>
              <Submit onClick={submitInterTime}>면접 예약</Submit>
            </SetDateModal>
          )}
        </SetInterDateContainer>
      );
    }
    return <></>;
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

const TimeInputWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
`;

const DateInputWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
`;

const SetInterDateContainer = styled.div`
  position: relative;
`;

const SetDateModal = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  padding: 10px 20px;
  background-color: white;
  width: fit-content;
  height: fit-content;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SetInterDate = styled.button`
  outline: none;
  height: 30px;
  width: fit-content;
  border: #012d64 solid 1px;
  font-size: 14px;
  padding: 0 8px;
  color: #012d64;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
`;

const InterDate = styled.p`
  margin: 0;
  color: #8fa4bb;
  font-size: 18px;
`;

const Submit = styled(SetInterDate)`
  width: fit-content;
  height: 25px;
  font-size: 12px;
  margin-top: 10px;
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

export default AppliedForClubView;
