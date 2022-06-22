import styled from '@emotion/styled';
import { NextPage } from 'next';

interface props {
  items: string[];
}

const MargueeItemView: NextPage<props> = ({ items }: props) => {
  return (
    <ItemsContainer>
      {items.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </ItemsContainer>
  );
};

const Item = styled.div`
  background-color: #7ca4d6;
  color: white;
  height: 70%;
  white-space: nowrap;
  margin-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border-radius: 50px;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default MargueeItemView;
