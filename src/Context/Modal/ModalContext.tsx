import React, {createContext, useCallback, useContext, useState} from 'react';
import Modal from './Components/Modal';

interface ModalContextData {
  isOpen: boolean;
  message: string;
  openModal(message: string): void;
  closeModal(): void;
}


const ModalContext = createContext({} as ModalContextData)

const ModalProvider: React.FC = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openModal = useCallback( (message) => {
    setMessage(message);
    setIsOpen(true);
  }, [] )

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [])

  return (
    <ModalContext.Provider value={{isOpen, message, openModal, closeModal}}>
      <> 
      {isOpen && <Modal message={message}/> }
      {children}
      </>
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if(!context){
    throw new Error('useModal must be within ModalProvider')
  }

  return context;
}

export {ModalProvider, useModal}