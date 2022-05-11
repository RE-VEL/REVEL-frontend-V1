import styled from '@emotion/styled';
import { NextPage } from 'next';

const HeaderVAC: NextPage = () => {
  return (
    <HedaerContaner>
      <Nav>
        <NavItem>Club</NavItem>
        <NavItem>Notion</NavItem>
        <NavItem>About us</NavItem>
        <NavItem>Chat</NavItem>
      </Nav>
      <Profile></Profile>
    </HedaerContaner>
  );
};

const HedaerContaner = styled.header`
  width: 100vw;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-bottom: grey 1px solid;

  position: fixed;
  top: 0;
  left: 0;
`;

const Nav = styled.nav`
  width: fit-content;
  display: flex;
  gap: 60px;
  margin-right: 40px;
`;

const Profile = styled.div`
  width: 32px;
  height: 32px;
  background-color: navy;
  border-radius: 50%;
  margin-right: 30px;
`;

const NavItem = styled.span`
  font-size: 14px;
`;

export default HeaderVAC;
