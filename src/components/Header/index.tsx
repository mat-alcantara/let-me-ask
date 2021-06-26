import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

import { useHistory } from 'react-router-dom';

import { RoomCode } from '../RoomCode';
import { Button } from '../Button';
import { Content } from './styles';

import logoImg from '../../assets/logo.svg';
import darkLogoImg from '../../assets/dark-logo.svg';
import { database } from '../../services/firebase';

type HeaderProps = {
  roomId: string;
  isAdminPage?: boolean;
};

const Header: React.FC<HeaderProps> = ({ isAdminPage, roomId }) => {
  const { title } = useContext(ThemeContext);
  const history = useHistory();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  return (
    <Content>
      {title === 'light' && <img src={logoImg} alt="Letmeask" />}
      {title === 'dark' && <img src={darkLogoImg} alt="Letmeask" />}
      <div>
        <Switch
          onChange={() => console.log('ok')}
          checked={false}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#fff"
          onColor="#000"
        />
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
