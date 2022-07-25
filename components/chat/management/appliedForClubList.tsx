import styled from '@emotion/styled';
import { NextPage } from 'next';
import { applicantType } from 'src/interface/applicant';
import AppliedForClub from './appliedForClub';

interface props {
  clubList: applicantType[];
}

const AppliedForClubList: NextPage<props> = ({ clubList }: props) => {
  return (
    <ListWrap>
      <ListContainer>
        {clubList.map((club) => (
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
