import styled from '@emotion/styled';
import { NextPage } from 'next';

const items = [
  '인석썜 어디계신지 보신분? 진짜 아무도 몰라요??',
  '킹갓제너럴엠페러충무공마제스티 준형 선배 요즙 잘 안보이네요',
  '인석쌤과 함께하고 있습니다',
  '도비는 무료에요!!',
  '레벨리가 인석쌤을 간절히 찾습니다',
  'REVEL은 노동으로 여러분들의 권익를 보장합니다',
  '메타메타몽몽 메타메타몽몽',
  '외출하고 싶다',
  '오늘 회식하는 동아리?',
  'back-end 안진우',
  'front-end 배준수',
  'design 김순호',
  'design 홍아연',
];

const MargueeItem: NextPage = () => {
  return (
    <ItemsContainer>
      {items.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </ItemsContainer>
  );
};

const Item = styled.div`
  background-color: #7ca4d6;
  color: white;
  height: 70%;
  white-space: nowrap;
  margin-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border-radius: 50px;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default MargueeItem;
