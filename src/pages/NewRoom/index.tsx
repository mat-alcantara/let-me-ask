import React, { FormEvent, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Link, useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import darkLogo from '../../assets/dark-logo.svg';

import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';

import { Container, MainContent } from './styles';

export const NewRoom: React.FC = () => {
  const { user } = useAuth();
  const { title } = useContext(ThemeContext);
  const history = useHistory();

  const [newRoom, setNewRoom] = useState('');

  const handleCreateRoom = async (e: FormEvent) => {
    e.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
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
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </MainContent>
      </main>
    </Container>
  );
};
