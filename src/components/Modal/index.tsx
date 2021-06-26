import React from 'react';
import Modal from 'react-modal';

import deleteImg from '../../assets/delete.svg';

import { Button } from '../Button';

import { RemoveImg } from './styles';

export const RemoveModal: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
        Open Modal
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
            <Button style={{ background: '#E73F5D' }}>Sim, excluir</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
