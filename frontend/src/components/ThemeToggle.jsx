import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 32px;
  padding: 3px;
  border: 1px solid rgba(216, 255, 84, 0.45);
  border-radius: 999px;
  background: ${props => props.isDarkMode ? '#101312' : '#ffffff'};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${props => props.isDarkMode ? '0 0 18px rgba(216,255,84,.12)' : '0 0 18px rgba(16,19,18,.16)'};

  &:hover { border-color: #d8ff54; box-shadow: 0 0 24px rgba(216,255,84,.3); }
  &:focus-visible { outline: 2px solid #d8ff54; outline-offset: 3px; }
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: 3px;
  left: ${props => props.isDarkMode ? '29px' : '3px'};
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${props => props.isDarkMode ? '#ffffff' : '#101312'};
  color: ${props => props.isDarkMode ? '#101312' : '#ffffff'};
  font-size: 11px;
  transition: left 0.3s cubic-bezier(.2,.8,.2,1), background 0.3s ease, color 0.3s ease;
`;

const ToggleIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.isDarkMode ? '10px' : '39px'};
  color: ${props => props.isDarkMode ? 'rgba(216,255,84,.7)' : 'rgba(16,19,18,.5)'};
  font-size: 10px;
  transition: left 0.3s ease, color 0.3s ease;
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ToggleContainer
      type="button"
      isDarkMode={isDarkMode}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <ToggleIcon isDarkMode={isDarkMode}>{isDarkMode ? <FaSun /> : <FaMoon />}</ToggleIcon>
      <ToggleThumb isDarkMode={isDarkMode}>{isDarkMode ? <FaMoon /> : <FaSun />}</ToggleThumb>
    </ToggleContainer>
  );
};

export default ThemeToggle;