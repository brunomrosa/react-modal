import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: linen;
  width: 200px;
  height: 150px;
  border-radius: 15px;
  z-index: 2;
  
  button {
    position: absolute;
    margin-left: 70%;
    bottom: 80%;
    color: red;
    background: none;
  }
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.3;
  z-index: 1;
`
export const MessageContainer = styled.div`
    
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
