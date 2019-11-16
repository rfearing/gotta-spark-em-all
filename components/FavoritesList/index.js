import React, { useState } from 'react';
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
  const [isAsc, setIsAsc] = useState(true);
  const sortedFavorites = isAsc
    ? favorites.sort((a, b) => a.name.localeCompare(b.name))
    : favorites.sort((a, b) => b.name.localeCompare(a.name));

  const handleChangeSort = () => setIsAsc(!isAsc);

  let faveList = sortedFavorites.map((poke) => (
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

      <p className="clearfix">
        Order: <b>{isAsc ? 'A-Z' : 'Z-A'}</b>

        <button
          type="button"
          className="btn-sm btn-outline-secondary float-right"
          onClick={handleChangeSort}
        >
          Change Order
        </button>
      </p>

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
