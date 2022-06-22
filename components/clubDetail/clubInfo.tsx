import { NextPage } from 'next';
import ClubInfoView from './clubInfoView';

const tags = ['EMBEDDED', 'WEB', '전공동아리'];
const eplanation = `상상만 해도 웃음이 나요 바나나 한입 먹지 못하는 원숭이라니 
내가 생각해도 정말 한심하죠 그런 눈으로 보지는 마요 값싼 동정은 필요 없으니 나 몰래 입을 가리고 웃는 거 다 아니까 나는 바나나 알러지 원숭이 

그래도 나는 바나나 좋아해 나는 바나나 알러지 원숭이 그래도 나는 바나나 사랑해 Oh yeah, oh yeah, oh oh oh Oh yeah (oh yeah) oh yeah (oh yeah) oh yeah (앙) 믿을 수 없는 일이 생겼죠 엄마가 손에 꼭 쥐여주신 바나나 맛이 나는 바나나 향이 가득한 우유 깜짝 놀라서 눈이 커져요 너무 달콤한 향기에 취해 빨대를 타고 올라오는 노란 빛깔 바나나 나는 바나나 알러지 원숭이 바나나 우유 있어서 행복해 나는 바나나 알러지 원숭이 바나나 우유 있어서 난 좋아 Oh yeah, oh yeah, oh oh oh Oh yeah (oh yeah), oh yeah (oh yeah), oh yeah (ow!) 어떡해 나 바나나가 없으면 어떡해 어떡해 어떡해 어떡해 바나나 바나나 바나나 나나나나그래도 나는 바나나 좋아해 나는 바나나 알러지 원숭이 그래도 나는 바나나 사랑해 Oh yeah, oh yeah, oh oh oh Oh yeah (oh yeah) oh yeah (oh yeah) oh yeah (앙) 믿을 수 없는 일이 생겼죠 엄마가 손에 꼭 쥐여주신 바나나 맛이 나는 바나나 향이 가득한 우유 깜짝 놀라서 눈이 커져요 너무 달콤한 향기에 취해 빨대를 타고 올라오는 노란 빛깔 바나나 나는 바나나 알러지 원숭이 바나나 우유 있어서 행복해 나는 바나나 알러지 원숭이 바나나 우유 있어서 난 좋아 Oh yeah, oh yeah, oh oh oh Oh yeah (oh yeah), oh yeah (oh yeah), oh yeah (ow!) 어떡해 나 바나나가 없으면 어떡해 어떡해 어떡해 어떡해 바나나 바나나 바나나 나나나나그래도 나는 바나나 좋아해`;

const members = [
  {
    id: 0,
    profile: '/img/icon.png',
    name: '김순호',
    major: 'design',
  },
  {
    id: 1,
    profile: '/img/icon.png',
    name: '김순호',
    major: 'design',
  },
  {
    id: 2,
    profile: '/img/icon.png',
    name: '김순호',
    major: 'design',
  },
  {
    id: 3,
    profile: '/img/icon.png',
    name: '김순호',
    major: 'design',
  },
  {
    id: 4,
    profile: '/img/icon.png',
    name: '김순호',
    major: 'design',
  },
  {
    id: 5,
    profile: '/img/icon.png',
    name: '김순호',
    major: 'design',
  },
  {
    id: 6,
    profile: '/img/icon.png',
    name: '김순호',
    major: 'design',
  },
  {
    id: 7,
    profile: '/img/icon.png',
    name: '김순호',
    major: 'design',
  },
  {
    id: 8,
    profile: '/img/icon.png',
    name: '김순호',
    major: 'design',
  },
];

const ClubInfo: NextPage = () => {
  const props = {
    tags,
    eplanation,
    members,
  };
  return <ClubInfoView {...props} />;
};

export default ClubInfo;
