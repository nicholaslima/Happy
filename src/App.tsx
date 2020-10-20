import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
