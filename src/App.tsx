import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/useTheme';

import Routes from './routes';

import ContextsProvider from './hooks';

import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ContextsProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </ContextsProvider>
  );
};

export default App;
