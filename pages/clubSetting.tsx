import styled from '@emotion/styled';
import { NextPage } from 'next';
import Aside from '../components/ClubSetting/aside';

const ClubSetting: NextPage = () => {
  return (
    <ClubSettingPage>
      <Aside />
      <ClubDataWrap></ClubDataWrap>
    </ClubSettingPage>
  );
};

const ClubSettingPage = styled.div`
  width: 100vw;
  margin: 0 auto;
  background-color: red;
  height: 100vh;
  padding: 0 5vw;
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClubDataWrap = styled.div`
  width: 65%;
  height: 85%;
  background-color: yellow;
  padding-right: 5%;
`;

export default ClubSetting;
