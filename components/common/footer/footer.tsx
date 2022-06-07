import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <FooterSection>
      <ProjectName>REVEL</ProjectName>
      <Link href="https://www.facebook.com/DSMReverie">
        <a style={{ marginRight: '50px' }}>
          <FacebookIcon />
        </a>
      </Link>
    </FooterSection>
  );
};

const FacebookIcon = styled.div`
  width: 80px;
  height: 80px;
  background-image: url('/img/facebookIcon.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProjectName = styled.p`
  margin: 0;
  width: 75%;
  border-bottom: 3px solid #002d63;
  color: #002d63;
  font-size: 32px;
  padding-left: 20px;
  padding-bottom: 10px;
  transform: translate(0, -40%);
  font-weight: 500;
`;

const FooterSection = styled.footer`
  width: 100vw;
  height: 140px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Footer;
