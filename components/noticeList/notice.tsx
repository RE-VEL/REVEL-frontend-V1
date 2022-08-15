import styled from '@emotion/styled';
import { noticeType } from 'interface/notice';
import { NextPage } from 'next';
import Link from 'next/link';

const Notice: NextPage<noticeType> = ({
  id,
  title,
  content,
  createAt,
  updateAt,
}: noticeType) => {
  return (
    <NoticeWrap>
      <Title>
        <Link href={`/notice/${id}`}>
          <a>
            <p>{title}</p>
          </a>
        </Link>
      </Title>
      <Info>
        <p>{createAt.replaceAll('-', '.')}</p>
      </Info>
    </NoticeWrap>
  );
};

const Title = styled.div`
  height: 100%;
  width: 55%;
  justify-content: center;
  align-items: center;
  display: flex;

  & > p {
    margin: 0;
    font-size: 1.2em;
    color: #7d7d7d;
  }
`;

const Info = styled.div`
  & > p {
    margin: 0;
    font-size: 1.1em;
    color: #7d7d7d;
  }
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoticeInfo = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const NoticeWrap = styled.div`
  width: 100%;
  height: 12%;
  border-bottom: 1px #cdcccd solid;
  display: flex;
  justify-content: space-between;
`;

export default Notice;
