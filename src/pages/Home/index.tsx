import React, { FormEvent, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { useHistory } from 'react-router-dom';

import Switch from 'react-switch';
import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import darkLogo from '../../assets/dark-logo.svg';
import googleIconImg from '../../assets/google-icon.svg';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

import { Container, CreateRoom, MainContent, Separator } from './styles';

import { database } from '../../services/firebase';

export const Home: React.FC = () => {
  const history = useHistory();
  const { switchTheme, theme } = useTheme();
  const { user, signInWithGoogle } = useAuth();

  const { title } = useContext(ThemeContext);

  const [roomCode, setRoomCode] = useState('');

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      // eslint-disable-next-line no-alert
      alert('Room does not exists');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  };

  return (
    <Container>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <MainContent>
          {title === 'light' && <img src={logoImg} alt="Letmeask" />}
          {title === 'dark' && <img src={darkLogo} alt="Letmeask" />}
          <CreateRoom type="button" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </CreateRoom>
          <Separator>ou entre em uma sala</Separator>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(e) => setRoomCode(e.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
          <div style={{ margin: '0 auto', marginTop: '32px' }}>
            <Switch
              onChange={switchTheme}
              checked={theme.title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={50}
              handleDiameter={20}
              offColor="#AAA"
              onColor="#835afd"
            />
          </div>
        </MainContent>
      </main>
    </Container>
  );
};
