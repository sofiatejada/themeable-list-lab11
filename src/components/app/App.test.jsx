import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '../characters/CharacterList';
import Character from '../characters/Character';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mock from './mock.json';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/', 
    (req, res, ctx) => {
      return res(
        ctx.json(mock)
      );
    })
);

describe('character component', () => {

  it('displays a character', () => {
    render(
      <Character 
        id="1" 
        name="poop"
        image="example.png" />
    );

    const article = screen.getByRole('img', { name: 'image of poop' });
    expect(article).toMatchSnapshot();
  });
});

describe('character list component', () => {

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters', async () => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );
    
    screen.getByAltText('loading gif');
    const list = await screen.findByLabelText('character-list');
    screen.debug();
    expect(list).toMatchSnapshot();
  });
});
