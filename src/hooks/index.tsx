import React from 'react';

import { AuthContextProvider } from './useAuth';
import { ThemeContextProvider } from './useTheme';

const AppProvider: React.FC = ({ children }) => (
  <AuthContextProvider>
    <ThemeContextProvider>{children}</ThemeContextProvider>
  </AuthContextProvider>
);

export default AppProvider;
