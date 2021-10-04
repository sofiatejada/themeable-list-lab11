import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetail from '../characters/CharacterDetail';
import Header from '../characters/Header';
import styles from './App.css';
import { useTheme, useThemeUpdate } from '../../hooks/ThemeProvider';
import lightLinks from '../app/';

export default function App() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <BrowserRouter>
      <div className={`${styles.a}${darkTheme ? styles.bgDark : toggleTheme}`}>
        <Header />
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/:id" component={CharacterDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
