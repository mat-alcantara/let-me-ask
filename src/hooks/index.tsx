import React from 'react';

import { AuthContextProvider } from './useAuth';

const AppProvider: React.FC = ({ children }) => (
  <AuthContextProvider>{children}</AuthContextProvider>
);

export default AppProvider;
