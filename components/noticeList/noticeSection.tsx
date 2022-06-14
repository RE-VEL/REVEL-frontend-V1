import styled from '@emotion/styled';
import { NextPage } from 'next';
import NoticeHead from './noticeHead';
import Notices from './notices';

const NoticeSection: NextPage = () => {
  return (
    <NoticeListContainer>
      <Title>NOTICE</Title>
      <NoticeWrap>
        <NoticeHead />
        <Notices />
        <PaginationBunBar>
          <PreSectionBtn />
          <Nav>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </Nav>
          <NextSectionBtn />
        </PaginationBunBar>
      </NoticeWrap>
    </NoticeListContainer>
  );
};

const PaginationBunBar = styled.div`
  flex: 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const NextSectionBtn = styled.button`
  background-image: url('/img/nextPage.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const PreSectionBtn = styled(NextSectionBtn)`
  transform: rotate(180deg);
`;

const Nav = styled.nav`
  display: flex;
  font-size: 16px;
  gap: 8px;

  & > span {
    cursor: pointer;
    color: #7d7d7d;
  }
`;

const NoticeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 90%;
  background-color: white;
`;

const Title = styled.h1`
  color: #17317d;
  height: 10%;
  margin: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 36px;
  padding-bottom: 10px;
`;

const NoticeListContainer = styled.section`
  height: 92%;
  width: 90vw;
  margin: 0 auto;
`;

export default NoticeSection;
