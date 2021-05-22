import React from 'react';
import Main from './pages/main'
import GlobalStyle from './styles/global'

import Globalprovider from './Context/GlobalProvider'
const App: React.FC = () => {
  return (
    <>
    <Globalprovider>
      <GlobalStyle/>
      <Main/>
    </Globalprovider>
    </>
  );
}

export default App;