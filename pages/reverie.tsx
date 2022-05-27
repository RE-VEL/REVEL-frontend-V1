import { NextPage } from 'next';
import styled from 'styled-components';

const Reverie: NextPage = () => {
  return <ImgDiv></ImgDiv>;
};

const ImgDiv = styled.div`
  height: 800px;
  width: 250px;
  background-image: url('/img/revel_devpage.png');
  background-color: blue;
`;

export default Reverie;
