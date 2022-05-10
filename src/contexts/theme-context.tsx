import { createContext, useState, useContext, useEffect } from 'react';
import { LayoutPropType, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: LayoutPropType) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  const changeTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
