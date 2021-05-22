import React from 'react';
import { ModalProvider } from './Modal/ModalContext';



const Context: React.FC = ({children}) => {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  );
}

export default Context;