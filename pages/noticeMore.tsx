import styled from '@emotion/styled';
import { NextPage } from 'next';

const NoticeMore: NextPage = () => {
  return (
    <div>
      <BackGround>
        <BackDiv>
          <Notice>NOTICE</Notice>
          <MoreView>
            <TitleBox>
              <NewDiv>
                <NTxt>N</NTxt>
              </NewDiv>
              <TextBox>
                <Title>신규동아리 등록 관련 공지</Title>
                <SmallText>22.03.13</SmallText>
              </TextBox>
            </TitleBox>
            <Content>
              <ContentBox>
                <IconBox>
                  <Icon></Icon>
                  <SmallText>Revel</SmallText>
                </IconBox>
                <SmallTextHo>첨부파일</SmallTextHo>
              </ContentBox>
              {/* <FilesBack>
                <FilesBoxBack> </FilesBoxBack>
                <FilesBox>
                  <Files>
                    <SmallText>첨부파일명.pdf</SmallText>
                    <DownImg></DownImg>
                  </Files>
                </FilesBox>
              </FilesBack> */}

              <ContentBox>
                <ContentTxt>
                  전공동아리 시작일 관련 공지합니다.
                  <br /> 2학년, 3학년 먼저 전공동아리 활동 시작하고, 동아리
                  시작일은 2,3학년 3월 29일 1학년들 동아리 4월 5일부터
                  시작합니다.
                </ContentTxt>
              </ContentBox>
            </Content>

            <NextBox>
              <SmallText>다음글</SmallText>
              <SmallText>이전글</SmallText>
            </NextBox>
          </MoreView>
        </BackDiv>
      </BackGround>
    </div>
  );
};
const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #dfecff;
`;
const BackDiv = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Notice = styled.p`
  font-size: 45px;
  font-family: 'nanumsquare';
  color: #1d3078;
  margin: 10px;
`;

const MoreView = styled.div`
  width: 85vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
`;

const TitleBox = styled.div`
  width: 85vw;
  height: 50px;
  border-top: 3px solid #7d7d7d;
  border-bottom: 1px solid #7d7d7d;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  font-family: 'nanumbarun';
  font-size: 20pt;
  margin: 0;
`;

const SmallText = styled.p`
  font-family: 'nanumgothic';
  font-size: 10pt;
  margin: 0;
  color: #868686;
`;

const SmallTextHo = styled.p`
  font-family: 'nanumgothic';
  font-size: 10pt;
  margin: 0;
  color: #868686;
`;

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

const NewDiv = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 10%;
  display: flex;
  justify-content: flex-start;
  background-color: #7b99c3;
  margin-right: 15px;
`;
const NTxt = styled.p`
  font-family: 'nanumsquareround';
  font-size: 22px;
  color: white;
  margin: 0;
  margin-left: 4px;
`;
const TextBox = styled.div`
  width: 75vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #1d3078;
  border-radius: 50%;
`;

const IconBox = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentTxt = styled.p`
  text-align: justify;
  font-family: 'nanumgothic';
  color: #7d7d7d;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 70vw;
  height: 60vh;
`;

const NextBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
  height: 50px;
`;
export default NoticeMore;
