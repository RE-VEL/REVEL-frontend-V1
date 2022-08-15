import styled from '@emotion/styled';
import { NextPage } from 'next';
import { applicantType } from 'src/interface/applicant';
import ChatSection from '../chatSection';
import AppliedForClubList from './appliedForClubList';
const clubList: applicantType[] = [
  {
    id: 0,
    name: '2301 김순호',
    interviewDay: {
      year: 2022,
      month: 5,
      date: 30,
      hours: 20,
      minute: 30,
    },
    interviewCompleted: true,
  },
  {
    id: 1,
    name: '2501 순호킴',
    interviewDay: {
      year: 2022,
      month: 5,
      date: 30,
      hours: 20,
      minute: 30,
    },
    interviewCompleted: false,
  },
  {
    id: 2,
    name: '2502 호순김',
    interviewDay: {
      year: 2022,
      month: 5,
      date: 30,
      hours: 20,
      minute: 30,
    },
    interviewCompleted: null,
  },
];

const ChatPage: NextPage = () => {
  return (
    <Page>
      <AppliedForClubList clubList={clubList} />
      <ChatWrap>
        <ChatSection />
      </ChatWrap>
    </Page>
  );
};

const Page = styled.main`
  height: 100vh;
  width: 100vw;
  padding-top: 80px;
  display: flex;
`;

const ChatWrap = styled.div`
  height: 100%;
  width: 80vw;
`;

export default ChatPage;
