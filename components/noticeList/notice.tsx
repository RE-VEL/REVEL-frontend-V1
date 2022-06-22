import styled from '@emotion/styled';
import { NextPage } from 'next';

interface props {
  title: string;
  writer: string;
  date: string;
}

const Notice: NextPage<props> = ({ title, writer, date }: props) => {
  return (
    <NoticeWrap>
      <Title>
        <p>{title}</p>
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
