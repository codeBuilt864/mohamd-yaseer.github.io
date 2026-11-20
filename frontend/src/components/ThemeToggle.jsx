import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../styles/themeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="theme-mode-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className={`toggle-track ${isDarkMode ? 'is-dark' : 'is-light'}`}>
        <span className="toggle-icon-sun">
          <FaSun size={11} />
        </span>
        <span className="toggle-icon-moon">
          <FaMoon size={11} />
        </span>
        <div className="toggle-thumb-circle">
          {isDarkMode ? <FaMoon size={10} /> : <FaSun size={10} />}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
