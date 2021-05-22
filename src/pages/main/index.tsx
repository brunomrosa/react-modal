import React, { useState } from 'react';
import { BoxContainer, ButtonContainer, Container } from './styles';
import Boxes from './Components/Boxes'
import { useModal } from '../../Context/Modal/ModalContext';
const Main: React.FC = () => {
  const {openModal} = useModal();
  const [boxCollection] = useState([Boxes,Boxes,Boxes,Boxes,Boxes])
  return (
    <Container>
      <BoxContainer>
        {boxCollection.map((Box) => {return (<Box/>)})}
      </BoxContainer>
        <ButtonContainer>
          <button onClick={()=> {
            openModal('This is a custom message')
          }}>Open Modal</button>
          
        </ButtonContainer>
      <BoxContainer>
        {boxCollection.map((Box) => {return (<Box/>)})}
      </BoxContainer>
      
    </Container>

  )
}

export default Main;