import React from 'react';
import { ThemeProvider } from 'styled-components';

import darkTheme from './styles/themes/dark';
import lightTheme from './styles/themes/light';

import Routes from './routes';

import ContextsProvider from './hooks';

import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ContextsProvider>
        <Routes />
        <GlobalStyle />
      </ContextsProvider>
    </ThemeProvider>
  );
};

export default App;
