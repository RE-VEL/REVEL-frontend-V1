import styled from '@emotion/styled';
import { NextPage } from 'next';

interface props {
  profileHover: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const HeaderView: NextPage<props> = ({
  profileHover,
  onMouseEnter,
  onMouseLeave,
}: props) => {
  return (
    <HedaerContaner>
      <Logo />
      <Nav>
        <NavItem>Club</NavItem>
        <NavItem>Notion</NavItem>
        <NavItem>About us</NavItem>
        <NavItem>Chat</NavItem>
      </Nav>
      <Profile onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <MenuFrame onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <DropMenu profileHover={profileHover}>
          <Menu>프로필</Menu>
          <Menu>문의하기</Menu>
          <Menu>로그아웃</Menu>
        </DropMenu>
      </MenuFrame>
    </HedaerContaner>
  );
};

const Logo = styled.div`
  background-image: url('/img/logo.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 60px;
  width: 150px;
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const HedaerContaner = styled.header`
  width: 100vw;
  height: 80px;
  background-color: #ffffffa0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-bottom: grey 1px solid;
  z-index: 10;

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
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const DropMenu = styled.div`
  width: 150px;
  height: 180px;
  background-color: rgba(50, 50, 50, 0.5);
  border-radius: 10px;
  padding: 20px 16px;
  display: ${({ profileHover }: { profileHover: boolean }) =>
    profileHover ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Menu = styled.div`
  color: white;
  display: flex;
  cursor: pointer;

  &:nth-of-type(3) {
    margin-top: 30px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const MenuFrame = styled.div`
  position: fixed;
  top: 0px;
  right: 10px;
  padding-top: 60px;
`;

export default HeaderView;
