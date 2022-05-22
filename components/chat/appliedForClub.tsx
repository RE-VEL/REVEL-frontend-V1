import styled from '@emotion/styled';
import { NextPage } from 'next';

interface Props {
  id: number;
  logo: string;
  lastMessage: string;
  clubName: string;
}

const AppliedForClub: NextPage<Props> = ({
  id,
  logo,
  clubName,
  lastMessage,
}: Props) => {
  return (
    <ApplicantContainer>
      <Name>{}</Name>
    </ApplicantContainer>
  );
};

const Name = styled.p`
  margin: 0;
  font-size: 20px;
`;

const ApplicantContainer = styled.div`
  width: 100%;
  height: 90px;
  border: solid 1px #87a4c5;
  background-color: #ffffff;
  margin-left: -1px;
  margin-top: -1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export default AppliedForClub;
