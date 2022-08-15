import styled from '@emotion/styled';
import { NextPage } from 'next';
import { MouseEvent, useEffect, useState } from 'react';
import { getNoticeList } from 'src/utils/apis/notice';
import { noticeType } from '../../interface/notice';
import NoticeHead from './noticeHead';
import Notices from './notices';

const NoticeSection: NextPage = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const [navNum, setNavNum] = useState<number[]>([]);
  const [noticeList, setNoticeList] = useState<noticeType[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const getResponse = async () => {
    const res = await getNoticeList(pageNum - 1);
    console.log(res);
    setNoticeList(res.content);
    setTotalPages(res.totalPages);
    setNavigationNumber(res.totalPages);
  };

  useEffect(() => {
    getResponse();
  }, [pageNum]);

  const prevPageNum = () => {
    if (pageNum > 1) {
      setPageNum((pre) => pre - 1);
    }
  };

  const nextPageNum = () => {
    if (pageNum < totalPages) {
      setPageNum((pre) => pre + 1);
    }
  };

  const setNavigationNumber = (totalPages: number) => {
    const leftmost = Math.max(1, pageNum - 2);

    const temp = [];

    console.log(leftmost, totalPages);

    if (pageNum < 4) {
      for (let i = 1; i <= 5; i++) {
        if (i > totalPages) break;
        temp.push(i);
      }
    } else if (leftmost + 4 >= totalPages) {
      for (let i = totalPages - 4; i <= totalPages; i++) {
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

  return (
    <NoticeListContainer>
      <Title>NOTICE</Title>
      <NoticeWrap>
        <NoticeHead />
        <Notices noticeList={noticeList} />
        <PaginationBunBar>
          <PreSectionBtn onClick={prevPageNum} isEnd={pageNum === 1} />
          <Nav>
            {navNum.map((num) => (
              <NavNumber
                key={num}
                onClick={changePageNum}
                isPoint={num === pageNum}
              >
                {num}
              </NavNumber>
            ))}
          </Nav>
          <NextSectionBtn
            onClick={nextPageNum}
            isEnd={pageNum === totalPages}
          />
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

  ${({ isEnd }: { isEnd: boolean }) => isEnd && 'visibility:hidden'}
`;

const PreSectionBtn = styled(NextSectionBtn)`
  transform: rotate(180deg);
  ${({ isEnd }: { isEnd: boolean }) => isEnd && 'visibility:hidden'}
`;

const Nav = styled.nav`
  display: flex;
  font-size: 16px;
  gap: 8px;
`;

const NavNumber = styled.p`
  width: 20px;
  cursor: pointer;
  color: ${({ isPoint }: { isPoint: boolean }) =>
    isPoint ? 'blue' : '#7d7d7d'};
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
