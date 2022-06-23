import styled from '@emotion/styled';
import { NextPage } from 'next';

const NoticeMore: NextPage = () => {
  return (
    <BackGround>
      <PageTitle>NOTICE</PageTitle>
      <MoreView>
        <SectionHeader>
          <NewNoticeMark>
            <p>N</p>
          </NewNoticeMark>
          <TitleWrap>
            <Title>신규동아리 등록 관련 공지</Title>
            <DateCreated>22.03.13</DateCreated>
          </TitleWrap>
        </SectionHeader>
        <ContentWrap>
          <TitleSection>
            <WriterWrap>
              <Icon />
              <Writer>Revel</Writer>
            </WriterWrap>
            <SmallTextHo>첨부파일</SmallTextHo>
          </TitleSection>
          <ContentContainer>
            <Content>
              전공동아리 시작일 관련 공지합니다.
              <br /> 2학년, 3학년 먼저 전공동아리 활동 시작하고, 동아리 시작일은
              2,3학년 3월 29일 1학년들 동아리 4월 5일부터 시작합니다. 전공동아리
              시작일 관련 공지합니다. 전공동아리 시작일 관련 공지합니다.
            </Content>
          </ContentContainer>
        </ContentWrap>
        <NextBox>
          <NextNotice>다음글</NextNotice>
          <NextNotice>이전글</NextNotice>
        </NextBox>
      </MoreView>
    </BackGround>
  );
};

const BackGround = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #dfecff;
  padding: 80px 5vw 0 5vw;
`;

const PageTitle = styled.p`
  font-size: 45px;
  font-family: 'nanumsquare';
  color: #1d3078;
  margin: 10px;
  flex: auto 0 0;
`;

const MoreView = styled.div`
  width: 85vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  flex: auto 1 1;
`;

const SectionHeader = styled.div`
  width: 85vw;
  height: 50px;
  border-top: 3px solid #7d7d7d;
  border-bottom: 1px solid #7d7d7d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto 0 0;
`;

const Title = styled.p`
  font-family: 'nanumbarun';
  font-size: 28px;
  margin: 0;
`;

const DateCreated = styled.p`
  font-family: 'nanumgothic';
  font-size: 15px;
  margin: 0;
  color: #868686;
`;

const Writer = styled(DateCreated)``;

const NextNotice = styled.button`
  font-family: 'nanumgothic';
  font-size: 15px;
  margin: 0;
  color: #868686;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SmallTextHo = styled.p`
  font-family: 'nanumgothic';
  font-size: 15px;
  margin: 0;
  color: #868686;
`;

const NewNoticeMark = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 5px;
  display: flex;
  background-color: #7b99c3;
  margin-right: 15px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    font-family: 'nanumsquareround';
    font-size: 16px;
    color: white;
    margin: 0;
  }
`;

const TitleWrap = styled.div`
  width: 75vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled(TitleSection)`
  min-height: 100%;
  /* overflow-y: auto; */
  align-items: flex-start;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #1d3078;
  border-radius: 50%;
`;

const WriterWrap = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.p`
  text-align: justify;
  font-family: 'nanumgothic';
  color: #7d7d7d;
  max-height: 100%;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 70vw;
  padding: 20px 0;
  flex: auto 1 1;
`;

const NextBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
  height: 50px;
  flex: auto 0 0;
`;

export default NoticeMore;

/*
const FilesBack = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  position: relative;
`;
const FilesBoxBack = styled.div`
  width: 200px;
  height: 150px;
  background-color: #8da3c2;
  border-radius: 5%;
  position: relative;
  opacity: 25%;
`;

const FilesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
`;
const Files = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-evenly;
`;
const DownImg = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('./img/pngwing.com.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: end;
  display: flex;
  justify-content: flex-start;
`;
*/

/* 
<FilesBack>
  <FilesBoxBack> </FilesBoxBack>
  <FilesBox>
    <Files>
      <SmallText>첨부파일명.pdf</SmallText>
      <DownImg></DownImg>
    </Files>
  </FilesBox>
</FilesBack> 
*/
