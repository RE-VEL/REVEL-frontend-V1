import styled from '@emotion/styled';
import { NextPage } from 'next';
import BackCircle from './backCrcle/backCircle';
import ServiceSections from './serviceSections';
import TitleMsg from './titleMsg';

const MoreService: NextPage = () => {
  return (
    <MoreServiceSection>
      <BackCircle />
      <TitleMsg />
      <ServiceSections />
    </MoreServiceSection>
  );
};

const MoreServiceSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #dcebfe;
`;

export default MoreService;
