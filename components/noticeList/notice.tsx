import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';

interface props {
  id: number;
  title: string;
  writer: string;
  date: string;
}

const Notice: NextPage<props> = ({ id, title, writer, date }: props) => {
  return (
    <NoticeWrap>
      <Title>
        <Link href={`/club/${id}`}>
          <a>
            <p>{title}</p>
          </a>
        </Link>
      </Title>
      <NoticeInfo>
        <Info>
          <p>{writer}</p>
        </Info>
        <Info>
          <p>{date}</p>
        </Info>
      </NoticeInfo>
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
  width: 45%;
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
