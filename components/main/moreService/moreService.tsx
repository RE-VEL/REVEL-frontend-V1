import styled from '@emotion/styled';
import { NextPage } from 'next';
import BackCircle from './backCircle';

const MoreService: NextPage = () => {
  return (
    <MoreServiceSection>
      <BackCircle />
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
