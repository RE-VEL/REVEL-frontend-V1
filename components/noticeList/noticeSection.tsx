import styled from '@emotion/styled';
import { NextPage } from 'next';
import { MouseEvent, useEffect, useState } from 'react';
import { noticeType } from '../../interface/notice';
import NoticeHead from './noticeHead';
import Notices from './notices';

const noticeList: noticeType[] = [...Array(100).fill(0)].map((_, i) => ({
  id: i + 1,
  title: `신규 동아리 시작일 관련 공지${i + 1}`,
  writer: 'Revel',
  date: '22.03.13',
}));

const NoticeSection: NextPage = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const [noticeSlice, setNoticeSlice] = useState<noticeType[]>([]);
  const [navNum, setNavNum] = useState<number[]>([]);

  const setNavigationNumber = () => {
    const leftmost = Math.max(1, pageNum - 2);
    const lastPage = Math.ceil(noticeList.length / 8);

    const temp = [];

    if (pageNum < 3) {
      for (let i = 1; i <= 5; i++) {
        if (i > lastPage) break;
        temp.push(i);
      }
    } else if (leftmost + 4 >= lastPage) {
      for (let i = lastPage - 4; i <= lastPage; i++) {
        temp.push(i);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        temp.push(leftmost + i);
      }
    }

    setNavNum(temp);
  };

  const changePageNum = (e: MouseEvent<HTMLSpanElement>) => {
    setPageNum(Number(e.currentTarget.innerText));
  };

  useEffect(() => {
    setNoticeSlice(noticeList.slice((pageNum - 1) * 8, pageNum * 8));
    setNavigationNumber();
  }, [pageNum]);

  return (
    <NoticeListContainer>
      <Title>NOTICE</Title>
      <NoticeWrap>
        <NoticeHead />
        <Notices noticeList={noticeSlice} />
        <PaginationBunBar>
          <PreSectionBtn />
          <Nav>
            {navNum.map((num) => (
              <p key={num} onClick={changePageNum}>
                {num}
              </p>
            ))}
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
