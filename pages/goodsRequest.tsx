import styled from '@emotion/styled';
import { NextPage } from 'next';
import GoodsRequest from '../components/goodsRequest/goodsRequest';

const GoodsRequestPage: NextPage = () => {
  return (
    <GoodsRequestContainer>
      <GoodsRequest />
    </GoodsRequestContainer>
  );
};

const GoodsRequestContainer = styled.main`
  width: 80vw;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default GoodsRequestPage;
