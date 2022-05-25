import styled from '@emotion/styled';
import { NextPage } from 'next';
import Message from './message';

const chats = [
  {
    id: 0,
    writer: 'me',
    contents:
      '네모난 화분 속에다 새빨간 너를 옮겨 심은 다음 빼곡한 별들을 지나 온 세상을 줄게 pretty little rose',
  },
  {
    id: 1,
    writer: 'opponent',
    contents:
      '한 번도 넌 떠나본 적이 없었지 작고 외로운 그 자릴 아마 더 큰 용기가 필요하겠지 난 여기서 널 기다려',
  },
  {
    id: 3,
    writer: 'me',
    contents: 'dear',
  },
  {
    id: 4,
    writer: 'opponent',
    contents: 'rose',
  },
  {
    id: 5,
    writer: 'me',
    contents:
      'Yeah, everything is gonna be okay 햇빛과 공기는 충분하게 Uh, B612에서 이름도 독특한 별들까지 상상할 수 없던 모든 신비한 곳들을 너와 함께 가볼 거야 oh, yeah 저 궤도에 오를 때 그 느낌은 참 이상하지만 평온을 되찾고 난 뒤에 (ooh-ooh-ooh) 저 창밖을 봐, 꼭 놀랄 거야  Ooh-ooh-ooh 네모난 화분 속에다 새빨간 너를 옮겨 심은 다음 빼곡한 별들을 지나 온 세상을 줄게, pretty little rose Pretty little rose, pretty little rose Pretty little rose, pretty little rose 아마 넌 우주를 여행한 첫 번째 장미야, pretty little rose',
  },
  {
    id: 6,
    writer: 'opponent',
    contents:
      '널 만난 후에 깨달은 걸 써볼게 기적은 모든 곳에 있어 너에게 나 주고 싶은 게 있는데 꼭 선물할 기회를 줘 이 별을 벗어나서 까만 저 미지엔 다 낯설지만, 위험하지만 두 눈에 담길 그 모든 게 Oh 얼마나 더 아름다울까?  Ooh-ooh-ooh (oh) 네모난 화분 속에다 새빨간 너를 옮겨 심은 다음 빼곡한 별들을 지나 온 세상을 줄게, pretty little rose Pretty little rose, pretty little rose Pretty little rose, pretty little rose 아마 넌 우주를 여행한 첫 번째 장미야, pretty little rose',
  },
  {
    id: 7,
    writer: 'opponent',
    contents:
      'Pretty little rose, pretty little rose Pretty little rose, pretty little rose 아마 넌 우주를 여행한 첫 번째 장미야, pretty little rose Pretty little rose, 너를 안고 Pretty little rose Pretty little rose, 좀 더 위로 Pretty little rose',
  },
  {
    id: 7,
    writer: 'me',
    contents:
      "아주 조그마한 흔적들이 있어 지금 난 걸음을 멈출 수가 없어 낡고 바랜 경고판이 보여 어두워진 숲을 지나 Ah Yeah Let's go Drip 맘 한 조각씩 Trip 길게 굽어진 길 I get it I get it 달콤한 네 Trap My style Drip Drip Drip Drip Drip Drip Drip yeah 커져간 내 호기심 Ay yeah ay 여긴 어디지 몰라 그냥 따라가지 뭐 양손에 가득히 네가 흘린 유혹들로 넘쳐나 후회는 없어 네가 어떤 앤지 알아내고 싶어 Oh my yeah 덫을 놓고 나를 노리는 거 알고 있지만 Toxic? Non toxic? Ah 난 보기보다 겁이 없지 넌 Toxic? Non toxic? Hey Let's go 난 독을 달게 삼켜내지 Dippin' and Dippin' and Dippin' and Dippin' and Toxic? Non toxic? Your Trick 글쎄 귀엽긴 하네 그냥 모른 척해 줄게 넌 Toxic? Non toxic? 둘 다 기꺼이 Dippin' and Dippin' and Dippin' and Dippin' and 넌 Drip Drip Drip Drip Drip 수풀 뒤에 숨어서 휘파람을 불어 또 Oh yeah 넌 이리저리 또 이리저리 날 놀려댈 궁리 중 Let's go Drip 맘 한 조각씩 Trip 너의 코앞까지 가빠진 숨소리 과연 언제까지 네가 버틸까 후회는 없어 네가 어떤 앤지 알아내고 싶어 Oh my yeah 덫을 놓고 나를 노리는 거 알고 있지만 웃기지 마 Toxic? Non toxic? Ah 난 보기보다 겁이 없지 Yeah 넌 Toxic? Non toxic? Hey Let's go 난 독을 달게 삼켜내지 Dippin' and Dippin' and Dippin' and Dippin' and Toxic? Non toxic? Your Trick 글쎄 귀엽긴 하네 그냥 모른 척해 줄게 넌 Toxic? Non toxic? 둘 다 기꺼이 Dippin' and Dippin' and Dippin' and Dippin' and 넌 Drip 웃음을 살짝 섞어서 뿌린 조그만 부스러기 얘 좀 봐라 넌 Toxic? Non toxic? 네 계획이 전부 엉망이 됐지 어쩌나 이젠 Babe Dippin' and Dippin' and Dippin' and Dippin' and 막다른 길이 나와버렸네 그럼 이제 술래는 네가 해 말해 봐 Toxic? Non toxic? 좀 더 가까이 Dippin' and Dippin' and Dippin' and Dippin' and Toxic? Non toxic? Ah 난 보기보다 겁이 없지 넌 Toxic? Non toxic? Hey Let's go 난 독을 달게 삼켜내지 Dippin' and Dippin' and Dippin' and Dippin' and Toxic? Non toxic? Your Trick 글쎄 귀엽긴 하네 그냥 모른 척해 줄게 넌 Toxic? Non toxic? 둘 다 기꺼이 Dippin' and Dippin' and Dippin' and Dippin' and 넌 Drip Drip Drip Drip Drip",
  },
];

const ChatSection: NextPage = () => {
  return (
    <ChatContainer>
      <ChattingWrap>
        {chats.map((chat) => (
          <Message key={chat.id} {...chat} />
        ))}
      </ChattingWrap>
      <ChatInputWrap>
        <ChatInput />
        <SubmitBtn></SubmitBtn>
      </ChatInputWrap>
    </ChatContainer>
  );
};

const ChattingWrap = styled.div`
  width: 100%;
  height: 88%;
  background-color: #eff3f7;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 1.5vw;
  padding-bottom: 20px;
`;

const ChatInputWrap = styled.div`
  width: 100%;
  height: 12%;
  background-color: #cfdae8;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ChatInput = styled.input`
  height: 70%;
  width: 85%;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 0 20px;
  font-size: 30px;
`;

const SubmitBtn = styled.button`
  height: 7vh;
  width: 7vh;
  cursor: pointer;
  background-color: transparent;
  background-image: url('/img/chatSubmit.png');
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
