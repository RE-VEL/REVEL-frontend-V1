import styled from '@emotion/styled';
import { NextPage } from 'next';

import { noticeType } from '../../interface/notice';
import Notice from './notice';

interface props {
  noticeList: noticeType[];
}

const Notices: NextPage<props> = ({ noticeList }: props) => {
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
