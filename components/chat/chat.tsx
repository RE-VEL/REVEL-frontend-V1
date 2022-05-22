import styled from '@emotion/styled';
import { NextPage } from 'next';
import AppliedForClubList from './appliedForClubList';

const Chat: NextPage = () => {
  return (
    <Page>
      <AppliedForClubList />
    </Page>
  );
};

const Page = styled.main`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
`;

export default Chat;
