import React, { FormEvent, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { Link, useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import darkLogo from '../../assets/dark-logo.svg';

import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

import { Container, MainContent } from './styles';

export const NewRoom: React.FC = () => {
  const { user } = useAuth();
  const { title } = useContext(ThemeContext);
  const { switchTheme, theme } = useTheme();
  const history = useHistory();

  const [newRoom, setNewRoom] = useState('');
  const [liveLink, setLiveLink] = useState('');

  const handleCreateRoom = async (e: FormEvent) => {
    e.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
      liveLink,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={(e) => handleCreateRoom(e)}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(e) => setNewRoom(e.target.value)}
              value={newRoom}
            />
            <input
              type="text"
              placeholder="Link da live"
              onChange={(e) => setLiveLink(e.target.value)}
              value={liveLink}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
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
