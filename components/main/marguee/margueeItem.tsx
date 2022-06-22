import { NextPage } from 'next';
import MargueeItemView from './margueeItemView';

const items = [
  '인석썜 어디계신지 보신분? 진짜 아무도 몰라요?',
  '회식하고 싶다',
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
  const props = {
    items,
  };
  return <MargueeItemView {...props} />;
};

export default MargueeItem;
