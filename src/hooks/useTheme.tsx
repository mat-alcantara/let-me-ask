import React, { createContext, useState, useContext, useCallback } from 'react';

import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';

type ThemeContextType = {
  theme: {
    title: string;
    colors: {
      background: string;
      text: string;
      input: string;
      answered: string;
      highlighted: string;
    };
  };
  switchTheme(): void;
};

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const switchTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAuth must be used within an ThemeProvider');
  }

  return context;
}
