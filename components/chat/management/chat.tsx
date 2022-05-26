import styled from '@emotion/styled';
import { NextPage } from 'next';
import ChatSection from '../chatSection';
import AppliedForClubList from './appliedForClubList';

const ChatPage: NextPage = () => {
  return (
    <Page>
      <AppliedForClubList />
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
