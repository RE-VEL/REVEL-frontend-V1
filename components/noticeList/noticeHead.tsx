import styled from '@emotion/styled';

const NoticeHead = () => {
  return (
    <NoticesHead>
      <Title>
        <p>제목</p>
      </Title>
      <NoticeInfo>
        <Info>
          <p>작성자</p>
        </Info>
        <Info>
          <p>날짜</p>
        </Info>
      </NoticeInfo>
    </NoticesHead>
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

const NoticesHead = styled.div`
  flex: 0 0 70px;
  width: 100%;
  border-top: #b7b7b7 2px solid;
  border-bottom: #b7b7b7 2px solid;
  display: flex;
  justify-content: space-between;
`;

export default NoticeHead;
