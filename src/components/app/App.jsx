import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetail from '../characters/CharacterDetail';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/:id" component={CharacterDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
