import styled from '@emotion/styled';

interface props {
  category: string;
}

const Category = ({ category }: props) => {
  return (
    <CategoryContainer>
      <p>{category}</p>
      <button>
        <span>+See</span>
        <span>More</span>
      </button>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  width: 160px;
  height: 90px;
  border-radius: 18px 0 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  transform: translate(90px);
  transition: 0.5s ease-in-out;

  background-color: #7ca4d6;

  & > p {
    writing-mode: vertical-rl;
    text-orientation: upright;
    margin: 0;
    color: white;
    font-size: 24px;
  }
  & > button {
    cursor: pointer;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;

    & > span {
      color: white;
      font-size: 20px;
    }
  }

  &:nth-child(2) {
    background-color: #bbd0e9;

    & > button > span,
    & > p {
      color: #023a6d;
    }
  }

  &:hover {
    transform: translate(0px);
  }
`;

export default Category;
