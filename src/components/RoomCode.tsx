import React from 'react';

import copyImg from '../assets/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
};

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <button
      type="button"
      className="room-code"
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </button>
  );
};
