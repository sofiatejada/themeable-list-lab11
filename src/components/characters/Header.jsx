import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeUpdate } from '../../hooks/ThemeProvider';

export default function Header() {
  // const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <div>
      <header>
        <Link to="/">Homepage</Link>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
      </header>
    </div>
  );
}
