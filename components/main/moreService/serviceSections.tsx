import styled from '@emotion/styled';
import { NextPage } from 'next';

const ServiceSections: NextPage = () => {
  return (
    <Services>
      <Notice>
        <p>NOTICE</p>
      </Notice>
      <RightSection>
        <CreateClub>
          <p>CREATE CLUB</p>
        </CreateClub>
        <ClubManegement>
          <p>CLUB</p>
          <p>MANEGEMENT</p>
        </ClubManegement>
      </RightSection>
    </Services>
  );
};

const Services = styled.div`
  z-index: 3;
  width: 70vw;
  height: 60vh;
  margin: 0 15vw;
  display: grid;
  grid-template-columns: 4fr 5fr;
  gap: 70px;
`;

const Notice = styled.div`
  background-image: url('/img/noticeService.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  box-shadow: 0 0 5px black;
  cursor: pointer;

  & > p {
    color: white;
    font-size: 40px;
    margin: 40px 0 0 30px;
  }
`;

const RightSection = styled.div`
  display: grid;
  gap: 80px;
`;

const CreateClub = styled.div`
  background-image: url('/img/createClubService.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  box-shadow: 0 0 5px black;
  align-items: center;
  display: flex;
  cursor: pointer;

  & > p {
    color: white;
    font-size: 40px;
    margin: 0 0 0 30px;
  }
`;

const ClubManegement = styled.div`
  background-image: url('/img/clubManagementService.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  box-shadow: 0 0 5px black;

  justify-content: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & > p {
    color: white;
    font-size: 40px;
    margin: 0 0 0 30px;
  }
`;

export default ServiceSections;
