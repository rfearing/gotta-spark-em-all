import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PokemonList, { noPokemonText } from '.';

const pokeList = [
  { name: 'bulbasaur', url: '.../pokemon/1/' },
  { name: 'ivysaur', url: '.../pokemon/2/' },
];

test('PokemonList renders correct text if no pokemon given', () => {
  const { getByText } = render(
    <PokemonList
      pokemon={[]}
      favorites={[]}
      addFavorite={() => null}
      unFavorite={() => null}
    />,
  );

  expect(getByText(noPokemonText)).toBeInTheDocument();
});

test('PokemonList renders Pokemon when passed in an array of pokemon', () => {
  const { getByText } = render(
    <PokemonList
      pokemon={pokeList}
      favorites={[]}
      addFavorite={() => null}
      unFavorite={() => null}
    />,
  );

  expect(getByText(pokeList[1].name)).toBeTruthy();
});
