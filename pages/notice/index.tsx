import styled from '@emotion/styled';
import { NextPage } from 'next';
import Background from '../../components/noticeList/bacckground/background';
import NoticeSection from '../../components/noticeList/noticeSection';

const NoticeList: NextPage = () => {
  return (
    <NoticeListPage>
      <Background />
      <NoticeSection />
    </NoticeListPage>
  );
};

const NoticeListPage = styled.main`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`;

export default NoticeList;
