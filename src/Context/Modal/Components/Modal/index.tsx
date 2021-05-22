import React from 'react';
import { useModal } from '../../ModalContext';

 import { Container, MessageContainer, ModalBackground } from './styles';

interface ModalProps {
  message: string;
}

const Modal: React.FC<ModalProps> = ({message}) => {
  const {closeModal} = useModal();
  return (
  <> 
  <ModalBackground/>
  <Container>
    
      <MessageContainer>
        <button onClick={() => {
          closeModal();
        }}>
          X
        </button>
        <p>This is a  Modal</p>
        <p>{message}</p>
      </MessageContainer>
    
  </Container> 
  </>);
}

export default Modal;