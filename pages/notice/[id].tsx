import styled from '@emotion/styled';
import { NextPage } from 'next';
import { noticeType } from 'src/interface/notice';
import { getNotice } from 'src/utils/apis/notice';

interface props {
  notice: noticeType;
}

const NoticeMore: NextPage<props> = ({ notice }: props) => {
  return (
    <BackGround>
      <PageTitle>NOTICE</PageTitle>
      <MoreView>
        <SectionHeader>
          <TitleWrap>
            <Title>{notice.title}</Title>
          </TitleWrap>
          <DateCreated>{notice.updateAt.replaceAll('-', '.')}</DateCreated>
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
            <Content>{notice.content}</Content>
          </ContentContainer>
        </ContentWrap>
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
  min-height: 50px;
  height: fit-content;
  border-top: 3px solid #7d7d7d;
  border-bottom: 1px solid #7d7d7d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: auto 0 0;
  padding: 5px 40px;
  gap: 50px;
`;

const Title = styled.p`
  font-family: 'nanumbarun';
  font-size: 28px;
  margin: 0;
  max-width: 70vw;
`;

const DateCreated = styled.p`
  font-family: 'nanumgothic';
  font-size: 15px;
  margin: 0;
  color: #868686;
`;

const Writer = styled(DateCreated)``;

const SmallTextHo = styled.p`
  font-family: 'nanumgothic';
  font-size: 15px;
  margin: 0;
  color: #868686;
`;

const TitleWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled(TitleSection)`
  min-height: 100%;
  align-items: flex-start;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #1d3078;
  border-radius: 50%;
`;

const WriterWrap = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Content = styled.p`
  text-align: justify;
  font-family: 'nanumgothic';
  color: #7d7d7d;
  max-height: 100%;
  white-space: pre-wrap;
  word-break: break-all;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 70vw;
  padding: 20px 0;
  flex: auto 1 1;
`;

export default NoticeMore;

export async function getServerSideProps(context: any) {
  const id: string = context.params.id;
  const res = await getNotice(id);

  return {
    props: {
      notice: res,
    },
  };
}
