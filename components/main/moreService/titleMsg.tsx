import styled from '@emotion/styled';

const TitleMsg = () => {
  return (
    <TitleContainer>
      <SectionTitle>
        <p>MORE</p>
        <p>SERVICE</p>
      </SectionTitle>
      <SectionMessage>
        <p>레벨에서 동아리와 관련된 모든 것을</p>
        <p>쉽게 확인하고, 관리하세요</p>
      </SectionMessage>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-left: 150px;
  z-index: 3;
  margin-bottom: 50px;
`;
const SectionTitle = styled.div`
  p {
    font-weight: bold;
    color: #1d3178;
    font-size: 40px;
    margin: 0;
  }
`;

const SectionMessage = styled.div`
  p {
    color: #082d5e;
    font-size: 20px;
  }
`;

export default TitleMsg;
