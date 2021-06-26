import React, { useCallback, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { FiLogOut } from 'react-icons/fi';

import Switch from 'react-switch';

import { useTheme } from '../../hooks/useTheme';

import { RoomCode } from '../RoomCode';
import { Button } from '../Button';
import { Content, Logo, Menus } from './styles';

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
    <>
      <Content>
        <Logo>
          {title === 'light' && (
            <Link to="/">
              <img src={logoImg} alt="Letmeask" />
            </Link>
          )}
          {title === 'dark' && (
            <Link to="/">
              <img src={darkLogoImg} alt="Letmeask" />
            </Link>
          )}
        </Logo>

        <RoomCode code={roomId} />

        <Menus>
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

          {isAdminPage && (
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar
            </Button>
          )}
          <Button isOutlined onClick={handleLogOut}>
            <FiLogOut />
          </Button>
        </Menus>
      </Content>
    </>
  );
};

export default Header;
