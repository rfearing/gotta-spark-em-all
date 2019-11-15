import PropTypes from 'prop-types';
import Pokemon from 'COMPONENTS/Pokemon';
import css from './index.scss';

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
    faveList = <p>You haven&apos;t added any favorites yet</p>;
  }

  return (
    <>
      <h4>Your Favorites:</h4>
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
