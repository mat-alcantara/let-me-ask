import React from 'react';

import copyImg from '../../assets/copy.svg';

import { Container } from './styles';

type RoomCodeProps = {
  code: string;
};

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <Container
      type="button"
      className="room-code"
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </Container>
  );
};
