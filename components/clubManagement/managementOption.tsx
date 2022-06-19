import styled from '@emotion/styled';
import { NextPage } from 'next';

const ManagementOption: NextPage = () => {
  return (
    <OptionSection>
      <Option>
        <Icon icon={'/img/managementOption/doc.svg'} />
        <Label>
          <MainLabel>문서 제출</MainLabel>
          <SubLabel>
            <span>선생님께 문서를 제출합니다</span>
          </SubLabel>
        </Label>
      </Option>
      <Option>
        <Icon icon={'/img/managementOption/info.svg'} />
        <Label>
          <MainLabel>동아리 정보 관리</MainLabel>
          <SubLabel>
            <span>동아리의 정보를 관리합니다</span>
          </SubLabel>
        </Label>
      </Option>
      <Option>
        <Icon icon={'/img/managementOption/applicantList.svg'} />
        <Label>
          <MainLabel>동아리 신청자 목록</MainLabel>
          <MultiLineSubLabel>
            <span>동아리 신청자 목록을</span>
            <span>확인합니다</span>
          </MultiLineSubLabel>
        </Label>
      </Option>
      <Option>
        <Icon icon={'/img/managementOption/article.svg'} />
        <Label>
          <MainLabel>물품 신청</MainLabel>
          <MultiLineSubLabel>
            <span>동아리 활동을 위한</span>
            <span>물품을 신청합니다</span>
          </MultiLineSubLabel>
        </Label>
      </Option>
    </OptionSection>
  );
};

const SubLabel = styled.div`
  flex-direction: column;
  display: flex;
  & > span {
    font-size: 13px;
    color: #ccc;
  }
`;

const MultiLineSubLabel = styled(SubLabel)`
  margin-bottom: -13px;
`;

const MainLabel = styled.p`
  margin: 0;
  font-size: 15px;
  color: white;
`;

const Label = styled.div`
  width: fit-content;
  min-width: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

const Icon = styled.div`
  background-color: #7d7d7d;
  background-image: url(${({ icon }: { icon: string }) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  align-self: center;
`;

const Option = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  gap: 10px;
`;

const OptionSection = styled.section`
  background-color: #002e63;
  width: 100vw;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
export default ManagementOption;
