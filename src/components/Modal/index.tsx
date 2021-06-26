import React from 'react';
import Modal from 'react-modal';

import deleteImg from '../../assets/delete.svg';
import { database } from '../../services/firebase';

import { Button } from '../Button';

import {
  RemoveImg,
  ActionContainer,
  Container,
  InteriorContainer,
} from './styles';

type RemoveModalProps = {
  questionId: string;
  roomId: string;
};

export const RemoveModal: React.FC<RemoveModalProps> = ({
  questionId,
  roomId,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  async function handleDeleteQuestion() {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '64px 128px',
    },
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        <img src={deleteImg} alt="Remover pergunta" />
      </button>
      <Container>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <InteriorContainer>
            <RemoveImg src={deleteImg} alt="Imagem de uma lixeira" />
            <h2>Excluir pergunta</h2>
            <p>Tem certeza de que deseja excuir essa pergunta?</p>
            <ActionContainer>
              <Button
                style={{ background: '#DBDCDD', color: '#737380' }}
                onClick={closeModal}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleDeleteQuestion}
                style={{ background: '#E73F5D' }}
              >
                Sim, excluir
              </Button>
            </ActionContainer>
          </InteriorContainer>
        </Modal>
      </Container>
    </>
  );
};
