import styled from '@emotion/styled';
import { NextPage } from 'next';

const Demand: NextPage = () => {
  return (
    <DemandWrap>
      <InputForm>
        <FormLabel>물품명</FormLabel>
        <FormInput placeholder="초고속 충전기" />
      </InputForm>
      <InputForm>
        <FormLabel>구매링크</FormLabel>
        <UrlInput placeholder="https://coupang.com" />
      </InputForm>
      <InputForm>
        <FormLabel>단가</FormLabel>
        <FormInput placeholder="14,520" />
      </InputForm>
      <InputForm>
        <FormLabel>배송비</FormLabel>
        <FormInput placeholder="2,500" />
      </InputForm>
      <InputForm>
        <FormLabel>수량</FormLabel>
        <FormInput type="number" defaultValue={0} min={0} />
      </InputForm>
      <InputForm>
        <FormLabel>구매사유</FormLabel>
        <ReasonPurchase placeholder="동아리 프로젝트를 진행함에 있어 전자기기의 충전용 충전기" />
      </InputForm>
    </DemandWrap>
  );
};

const DemandWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const InputForm = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FormLabel = styled.label`
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

const FormInput = styled.input`
  width: 8vw;
  text-align: center;
  font-size: 16px;
  border: none;
  border-bottom: 1px gray solid;
  padding-bottom: 5px;
  outline: none;
`;

const UrlInput = styled(FormInput)`
  width: 15vw;
`;

const ReasonPurchase = styled(FormInput)`
  width: 28vw;
`;

export default Demand;
