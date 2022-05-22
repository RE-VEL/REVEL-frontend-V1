import styled from '@emotion/styled';
import { NextPage } from 'next';

const ChatSection: NextPage = () => {
  return (
    <ChatContainer>
      <ChattingWrap></ChattingWrap>
      <ChatInputWrap>
        <ChatInput></ChatInput>
        <SubmitBtn></SubmitBtn>
      </ChatInputWrap>
    </ChatContainer>
  );
};

const ChattingWrap = styled.div`
  width: 100%;
  height: 85%;
  background-color: #eff3f7;
`;

const ChatInputWrap = styled.div`
  width: 100%;
  height: 15%;
  background-color: #cfdae8;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ChatInput = styled.input`
  height: 80%;
  width: 85%;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 0 20px;
  font-size: 30px;
`;

const SubmitBtn = styled.button`
  height: 8vh;
  width: 8vh;
  cursor: pointer;
  background-color: transparent;
  background-image: url('/img/nextBtn.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
`;

const ChatContainer = styled.section`
  height: 100%;
  width: 70vw;
`;

export default ChatSection;
