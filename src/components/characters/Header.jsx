import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeUpdate, useTheme } from '../../hooks/ThemeProvider';
import styles from '../app/App.css';

export default function Header() {
  const toggleTheme = useThemeUpdate();
  const darkTheme = useTheme();

  return (
    <div>
      <header>
        <Link className={
          `${darkTheme ? styles.dark : !darkTheme ? styles.light : toggleTheme}
          ${darkTheme ? styles.hov : !darkTheme ? styles.lhov : toggleTheme}`
        }
        to="/"
        aria-label="button">
          Homepage</Link>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
      </header>
    </div>
  );
}
