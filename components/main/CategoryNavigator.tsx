import styled from '@emotion/styled';
import Category from './Category';

const CategoryNavigator = () => {
  return (
    <Navigator>
      {['창체', '자율', '전공'].map((category) => (
        <Category key={category} category={category} />
      ))}
    </Navigator>
  );
};

const Navigator = styled.aside`
  position: absolute;
  width: fit-content;
  height: fit-content;
  right: 0;
  top: 50%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default CategoryNavigator;
