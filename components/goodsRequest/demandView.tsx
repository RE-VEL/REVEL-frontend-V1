import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';

interface props {
  count: number;
  onlyNumberInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DemandView: NextPage<props> = ({ count, onlyNumberInput }: props) => {
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
        <FormInput
          value={count}
          placeholder="1"
          onChange={onlyNumberInput}
          type="number"
          max={100}
          min={0}
        />
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

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const UrlInput = styled(FormInput)`
  width: 15vw;
`;

const ReasonPurchase = styled(FormInput)`
  width: 28vw;
`;

export default DemandView;
