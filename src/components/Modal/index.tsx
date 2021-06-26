import React from 'react';
import Modal from 'react-modal';

import deleteImg from '../../assets/delete.svg';
import { database } from '../../services/firebase';

import { Button } from '../Button';

import { RemoveImg } from './styles';

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
    <div>
      <button type="button" onClick={openModal}>
        <img src={deleteImg} alt="Remover pergunta" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RemoveImg src={deleteImg} alt="Imagem de uma lixeira" />
          <h2 style={{ color: '#222', textAlign: 'center' }}>
            Excluir pergunta
          </h2>
          <p style={{ color: '#222', marginTop: '16px', marginBottom: '32px' }}>
            Tem certeza de que deseja excuir essa pergunta?
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
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
          </div>
        </div>
      </Modal>
    </div>
  );
};
