import React, { useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi';

import Switch from 'react-switch';

import { useTheme } from '../../hooks/useTheme';

import { RoomCode } from '../RoomCode';
import { Button } from '../Button';
import { Content } from './styles';

import logoImg from '../../assets/logo.svg';
import darkLogoImg from '../../assets/dark-logo.svg';
import { database, auth } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

type HeaderProps = {
  roomId: string;
  isAdminPage?: boolean;
};

const Header: React.FC<HeaderProps> = ({ isAdminPage, roomId }) => {
  const { title } = useContext(ThemeContext);
  const { switchTheme, theme } = useTheme();
  const { handleRemoveUser } = useAuth();
  const history = useHistory();

  const handleLogOut = useCallback(async () => {
    await auth.signOut().then(() => {
      handleRemoveUser();
      history.push('/');
    });
  }, []);

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
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Switch
          onChange={switchTheme}
          checked={theme.title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#AAA"
          onColor="#835afd"
        />
        <RoomCode code={roomId} />
        {isAdminPage && (
          <Button isOutlined onClick={handleEndRoom}>
            Encerrar sala
          </Button>
        )}
        <Button isOutlined onClick={handleLogOut}>
          <FiLogOut />
        </Button>
      </div>
    </Content>
  );
};

export default Header;
