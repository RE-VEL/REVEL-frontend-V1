import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';

interface props {
  id: number;
  writer: string;
  contents: string;
}

const Message: NextPage<props> = ({ id, writer, contents }: props) => {
  return <MessageContainer writer={writer}>{contents}</MessageContainer>;
};

const SettingbyWriter = ({ writer }: { writer: string }) => {
  const isWriteMe = writer === 'me';

  return isWriteMe
    ? css`
        align-self: flex-end;
        background-color: #fff;
      `
    : '';
};

const MessageContainer = styled.div`
  height: fit-content;
  width: fit-content;
  font-size: 16px;
  max-width: 60%;
  padding: 30px;
  margin-top: 20px;
  align-self: flex-start;
  background-color: #cfdae8;
  border-radius: 20px;

  ${SettingbyWriter}
`;

export default Message;
