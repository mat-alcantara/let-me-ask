import React from 'react';

import Routes from './routes';

import ContextsProvider from './hooks';

import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <ContextsProvider>
      <Routes />
      <GlobalStyle />
    </ContextsProvider>
  );
};

export default App;
