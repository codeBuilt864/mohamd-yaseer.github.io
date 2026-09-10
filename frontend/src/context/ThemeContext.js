import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    const surfaceColor = isDarkMode ? '#101312' : '#ffffff';
    document.documentElement.style.setProperty('--bs-body-bg', surfaceColor);
    document.documentElement.style.setProperty('--bs-tertiary-bg', surfaceColor);
    document.documentElement.style.setProperty('--bs-secondary-bg', surfaceColor);
    document.body.style.setProperty('background-color', surfaceColor, 'important');
    document.body.style.setProperty('background', surfaceColor, 'important');
    document.documentElement.style.setProperty('background-color', surfaceColor, 'important');
    document.documentElement.style.setProperty('background', surfaceColor, 'important');
    document.querySelectorAll('main, .App, .navbar').forEach((element) => {
      element.style.setProperty('background-color', surfaceColor, 'important');
      element.style.setProperty('background', surfaceColor, 'important');
    });

    const footerTextColor = isDarkMode ? '#f2f0e9' : '#101312';
    document.querySelectorAll('.footer-prompt h2, .footer-cta, .footer-links a, .footer-bottom').forEach((element) => {
      element.style.setProperty('color', footerTextColor, 'important');
    });
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};