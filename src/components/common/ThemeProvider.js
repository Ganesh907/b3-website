import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Load the saved theme from localStorage or set it based on the system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (systemPrefersDark ? 'dark' : 'light');
  });

  // Effect to apply the theme class to the document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save user preference to localStorage
    localStorage.setItem('theme', theme);
    console.log(theme)
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only change if the user hasn't set a theme
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
