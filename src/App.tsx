import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas  from './routes';
import { AppProvider } from './hooks';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
