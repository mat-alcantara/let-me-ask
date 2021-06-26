import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { RoomCode } from '../RoomCode';
import { Button } from '../Button';
import { Content } from './styles';

import logoImg from '../../assets/logo.svg';
import darkLogoImg from '../../assets/dark-logo.svg';

type HeaderProps = {
  roomId: string;
  isAdminPage?: boolean;
  handleEndRoom(): Promise<void>;
};

const Header: React.FC<HeaderProps> = ({
  isAdminPage,
  roomId,
  handleEndRoom,
}) => {
  const { title } = useContext(ThemeContext);

  return (
    <Content>
      {title === 'light' && <img src={logoImg} alt="Letmeask" />}
      {title === 'dark' && <img src={darkLogoImg} alt="Letmeask" />}
      <div>
        <RoomCode code={roomId} />
        {isAdminPage && (
          <Button isOutlined onClick={handleEndRoom}>
            Encerrar sala
          </Button>
        )}
      </div>
    </Content>
  );
};

export default Header;
