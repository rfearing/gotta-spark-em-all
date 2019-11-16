import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FavoritesList, { noFavoritesText } from '.';

const exampleFavorites = [
  { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
];

test('FavoritesList renders correct text if no favorites given', () => {
  const { getByText } = render(
    <FavoritesList
      unFavorite={() => null}
    />,
  );

  expect(getByText(noFavoritesText)).toBeInTheDocument();
});

test('FavoritesList renders Pokemon when passed in an array of favorites', () => {
  const { getByText } = render(
    <FavoritesList
      favorites={exampleFavorites}
      unFavorite={() => null}
    />,
  );

  expect(getByText(exampleFavorites[1].name)).toBeTruthy();
});
