import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from 'COMPONENTS/Pokemon';
import css from './style.scss';

export const noFavoritesText = 'You haven\'t added any favorites yet';

/**
 * Map over an array of pokemon. If no pokemon are found, return text.
 */
const FavoritesList = ({
  favorites,
  unFavorite,
}) => {
  let faveList = favorites.map((poke) => (
    <Pokemon
      key={poke.name}
      pokemon={poke}
      className={css.favorite}
      addFavorite={() => null}
      unFavorite={unFavorite}
      isFavorited
    />
  ));

  if (!favorites || favorites.length === 0) {
    faveList = <p>{noFavoritesText}</p>;
  }

  return (
    <>
      <h4 className="mb-3">Your Favorites:</h4>
      <ul className={css.list}>
        {faveList}
      </ul>
    </>
  );
};

FavoritesList.propTypes = {
  unFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object),
};

FavoritesList.defaultProps = {
  favorites: [],
};

export default FavoritesList;
