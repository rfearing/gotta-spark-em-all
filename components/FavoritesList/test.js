import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FavoritesList, { noFavoritesText } from '.';

const exampleFavorites = [
  { name: 'charizard', url: '.../pokemon/5/' },
  { name: 'bulbasaur', url: '.../pokemon/1/' },
  { name: 'ivysaur', url: '.../pokemon/2/' },
];

test('FavoritesList renders correct text if no favorites given', () => {
  const { getByText } = render(
    <FavoritesList
      unFavorite={() => null}
    />,
  );

  expect(getByText(noFavoritesText)).toBeInTheDocument();
});

test('FavoritesList renders Pokemon in alphabetical order', () => {
  const { getByText, container } = render(
    <FavoritesList
      favorites={exampleFavorites}
      unFavorite={() => null}
    />,
  );

  expect(getByText(exampleFavorites[1].name)).toBeTruthy();
  expect(container.querySelector('ul li:first-child h4').textContent).toContain('bulbasaur');
});
