import styled from '@emotion/styled';
import { NextPage } from 'next';
import AppliedForClubList from './appliedForClubList';
import ChatSection from './chatSection';

const Chat: NextPage = () => {
  return (
    <Page>
      <AppliedForClubList />
      <ChatSection />
    </Page>
  );
};

const Page = styled.main`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  display: flex;
`;

export default Chat;
