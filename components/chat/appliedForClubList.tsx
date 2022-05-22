import styled from '@emotion/styled';
import { NextPage } from 'next';
import AppliedForClub from './appliedForClub';

const ClubList = [
  {
    id: 0,
    logo: '/img/icon.png',
    clubName: 'REVERIE',
    lastMessage: '순호킴님의 면접일자는 4월 13일 00시 00분 입니다',
  },
  {
    id: 1,
    logo: '/img/icon.png',
    clubName: 'REVERIE',
    lastMessage: '순호킴님의 면접일자는 4월 13일 00시 00분 입니다',
  },
  {
    id: 2,
    logo: '/img/icon.png',
    clubName: 'REVERIE',
    lastMessage: '순호킴님의 면접일자는 4월 13일 00시 00분 입니다',
  },
];

const appliedForClubList: NextPage = () => {
  return (
    <ListWrap>
      <ListContainer>
        {ClubList.map((club) => (
          <AppliedForClub key={club.id} {...club}></AppliedForClub>
        ))}
      </ListContainer>
    </ListWrap>
  );
};

const ListWrap = styled.div`
  height: 100%;
  width: 30vw;
  background-color: #cfdae8;
  border: #acacac 1px solid;
  margin: 0;
  position: relative;
`;

const ListContainer = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30vw;
`;

export default appliedForClubList;
