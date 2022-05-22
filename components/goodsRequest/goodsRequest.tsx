import styled from '@emotion/styled';
import { useState } from 'react';
import Demand from './demand';

interface articleType {
  id: number;
  name: string;
  price: number;
  shippingFee: number;
  quantity: number;
  reason: string;
}

const GoodsRequest = () => {
  const [articles, setArticles] = useState<articleType[]>([
    {
      id: 0,
      name: '',
      price: 0,
      shippingFee: 0,
      quantity: 0,
      reason: '',
    },
    {
      id: 1,
      name: '',
      price: 0,
      shippingFee: 0,
      quantity: 0,
      reason: '',
    },
  ]);

  const addArticle = (): void => {
    const id = articles[articles.length - 1].id + 1;
    setArticles([
      ...articles,
      {
        id,
        name: '',
        price: 0,
        shippingFee: 0,
        quantity: 0,
        reason: '',
      },
    ]);
  };

  return (
    <>
      <AddForm>
        <label>물품신청</label>
        <AddFormBtn onClick={addArticle} />
      </AddForm>
      <DemandList>
        {articles.map((article) => (
          <Demand key={article.id} />
        ))}
      </DemandList>
      <SubmitBtn>신청하기</SubmitBtn>
    </>
  );
};

const SubmitBtn = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 8px;
  border: none;
  outline: none;
  margin-top: 16px;
  align-self: flex-end;
  background-color: #f6f6f6;
  color: #002e63;

  box-shadow: 0 0 5px #00000040;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

const DemandList = styled.div`
  height: 68vh;
  width: 100%;
  margin-top: 30px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AddForm = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 5vh;

  label {
    margin: 0;
    font-size: 16px;
  }
`;

const AddFormBtn = styled.button`
  background-color: #f6f6f6;
  background-image: url('/img/plus.svg');
  border-radius: 50%;
  box-shadow: 0 0 10px #00000030;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  padding: 5px;
  cursor: pointer;
`;

export default GoodsRequest;
