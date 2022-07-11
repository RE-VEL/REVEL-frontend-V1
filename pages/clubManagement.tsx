import styled from '@emotion/styled';
import { NextPage } from 'next';
import ClubMembers from 'components/clubManagement/clubMembers';
import ManagementOption from 'components/clubManagement/managementOption';

const ClubManagement: NextPage = () => {
  return (
    <ManagementPage>
      <ClubMembers />
      <ManagementOption />
    </ManagementPage>
  );
};

const ManagementPage = styled.main`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
`;

export default ClubManagement;
