import styled from '@emotion/styled';
import { NextPage } from 'next';
import AppliedForClub from './appliedForClub';

const ClubList = [
  {
    id: 0,
    name: '2301 김순호',
    interviewDay: {
      year: 2022,
      month: 5,
      date: 30,
      hours: 20,
      minute: 30,
    },
    interviewCompleted: true,
  },
  {
    id: 1,
    name: '2501 순호킴',
    interviewDay: {
      year: 2022,
      month: 5,
      date: 30,
      hours: 20,
      minute: 30,
    },
    interviewCompleted: false,
  },
  {
    id: 2,
    name: '2502 호순김',
    interviewDay: {
      year: 2022,
      month: 5,
      date: 30,
      hours: 20,
      minute: 30,
    },
    interviewCompleted: true,
  },
];

const AppliedForClubList: NextPage = () => {
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
  width: 20vw;
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
  width: 20vw;
`;

export default AppliedForClubList;
