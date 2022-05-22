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
      <Icon logo={logo} />
      <MessageWrap>
        <ClubName>{clubName}</ClubName>
        <Message>{lastMessage}</Message>
      </MessageWrap>
    </ApplicantContainer>
  );
};

const MessageWrap = styled.div`
  width: 100%;
  padding-left: 90px;
  margin-left: -90px;
`;

const ClubName = styled.p`
  margin: 0;
  font-size: 18px;
`;

const Message = styled.p`
  margin: 0;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;

  font-size: 18px;
  color: grey;
`;

const Icon = styled.div`
  height: 70px;
  width: 70px;
  background-image: url(${({ logo }: { logo: string }) => logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  gap: 10px;
  padding: 0 10px;
`;

export default AppliedForClub;
