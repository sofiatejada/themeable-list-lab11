import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme, useThemeUpdate } from '../../hooks/ThemeProvider';
import styles from '../app/App.css';

export default function Character({ name, image, id }) {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <figure>
      <img src={image} alt={`image of ${name}`} />
      <Link 
        className={`
        ${darkTheme ? styles.dark : !darkTheme ? styles.light : toggleTheme}
        ${darkTheme ? styles.hov : !darkTheme ? styles.lhov : toggleTheme}`} 
        key={id} to={id}>
        {name}
      </Link>
    </figure>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string
};
