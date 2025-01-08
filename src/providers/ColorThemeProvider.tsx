import { createContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

// Get the saved theme or fallback to 'dark'
const savedTheme = localStorage.getItem('color-theme') as Theme;
const defaultTheme = savedTheme || 'dark';

export const ColorThemeContext = createContext<[Theme, () => void]>([defaultTheme, () => {}]);

type ColorThemeProviderProps = { children: JSX.Element };

export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('color-theme', newTheme);

      // Update DOM instantly
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    // Apply the theme when the component mounts
    document.documentElement.classList.add(theme);
    return () => document.documentElement.classList.remove('light', 'dark');
  }, []); // Empty dependency means this runs only once

  return (
    <ColorThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ColorThemeContext.Provider>
  );
}
