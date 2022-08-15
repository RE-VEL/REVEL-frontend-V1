import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import Aside from 'components/ClubSetting/aside';
import MemberSection from 'components/ClubSetting/memberSection';

const ClubSetting: NextPage = () => {
  const [text, setText] = useState<string>('');

  const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <ClubSettingPage>
      <Aside />
      <ClubDataWrap>
        <MemberSection />
        <DescriptionWrap>
          <ClubDescription
            maxLength={500}
            onChange={changeDescription}
            value={text}
            placeholder="동아리 설명을 입력해 주세요."
          />
          <TextCount>{text.length}/500</TextCount>
        </DescriptionWrap>
      </ClubDataWrap>
    </ClubSettingPage>
  );
};

const TextCount = styled.p`
  position: absolute;
  bottom: 10px;
  right: 20px;
  margin: 0;
  font-size: 12px;
  color: #8d8e8e;
`;

const DescriptionWrap = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
`;

const ClubDescription = styled.textarea`
  height: 100%;
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  box-shadow: 0px 0px 20px #20202024;
  padding: 30px 40px;
  font-size: 18px;
`;

const ClubSettingPage = styled.div`
  width: 100vw;
  margin: 0 auto;
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
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ClubSetting;
