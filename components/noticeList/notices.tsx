import styled from '@emotion/styled';
import { NextPage } from 'next';
import Notice from './notice';

const noticeList = [
  {
    id: 1,
    title: '신규 동아리 시작일 관련 공지',
    writer: 'Revel',
    date: '22.03.13',
  },
  {
    id: 2,
    title: '신규 동아리 시작일 관련 공지',
    writer: 'Revel',
    date: '22.03.13',
  },
  {
    id: 3,
    title: '신규 동아리 시작일 관련 공지',
    writer: 'Revel',
    date: '22.03.13',
  },
  {
    id: 4,
    title: '신규 동아리 시작일 관련 공지',
    writer: 'Revel',
    date: '22.03.13',
  },
  {
    id: 5,
    title: '신규 동아리 시작일 관련 공지',
    writer: 'Revel',
    date: '22.03.13',
  },
  {
    id: 6,
    title: '신규 동아리 시작일 관련 공지',
    writer: 'Revel',
    date: '22.03.13',
  },
  {
    id: 7,
    title: '신규 동아리 시작일 관련 공지',
    writer: 'Revel',
    date: '22.03.13',
  },
  {
    id: 8,
    title: '신규 동아리 시작일 관련 공지',
    writer: 'Revel',
    date: '22.03.13',
  },
];

const Notices: NextPage = () => {
  return (
    <NoticesWrap>
      {noticeList.map((notice) => (
        <Notice key={notice.id} {...notice} />
      ))}
    </NoticesWrap>
  );
};

const NoticesWrap = styled.div`
  flex: 1 1 auto;
`;

export default Notices;
