import styled from '@emotion/styled';
import { NextPage } from 'next';

const Information: NextPage = () => {
  return (
    <Info>
      <p> -전공동아리 활동기간은 1년으로 한다.</p>
      <p> -시간 구성원의 출석체크는 동아리장 학생이 한다.</p>
      <p> -강사 선생님등의 출석체크는 동아리장 학생이 한다.</p>
    </Info>
  );
};

const Info = styled.div`
  p {
    margin: 0;
    color: #ababab;
  }
`;

export default Information;
