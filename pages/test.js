import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '.';

const pokeList = [
  { name: 'bulbasaur', url: '.../pokemon/1/' },
  { name: 'ivysaur', url: '.../pokemon/2/' },
];

test('A Pokemon is added to favorites when clicked', () => {
  const { container } = render(<Home pokemon={pokeList} />);
  // When Bulbasaur is click on from the main list:
  fireEvent.click(container.querySelector('#list-bulbasaur button'));
  // He should be added to the Faves list:
  expect(container.querySelector('#fave-bulbasaur')).toBeTruthy();
});
