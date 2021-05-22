import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: papayawhip;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
button {
    background: mistyrose;
    height: 100px;
    width: 100px;
    border-radius: 15px;
    margin: 0px 10px;
  }
`

export const BoxContainer = styled.div`
overflow: auto;
display: flex;
flex-direction: row;
margin: auto;
`