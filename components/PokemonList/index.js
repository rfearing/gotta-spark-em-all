import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from 'COMPONENTS/Pokemon';
import css from './style.scss';

export const noPokemonText = 'No Pokemon';

/**
 * Map over an array of pokemon. If no pokemon are found, return text.
 */
const PokemonList = ({
  pokemon,
  favorites,
  addFavorite,
  unFavorite,
}) => {
  if (!pokemon || pokemon.length === 0) {
    return <h4>{noPokemonText}</h4>;
  }

  const pokeList = pokemon.map((p) => {
    const isFavorited = favorites.find((f) => f.name === p.name);
    return (
      <Pokemon
        key={p.name}
        pokemon={p}
        isFavorited={Boolean(isFavorited)}
        addFavorite={addFavorite}
        unFavorite={unFavorite}
      />
    );
  });

  return (
    <ul className={css.list}>
      {pokeList}
    </ul>
  );
};

PokemonList.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  unFavorite: PropTypes.func.isRequired,
  pokemon: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.object),
};

PokemonList.defaultProps = {
  pokemon: [],
  favorites: [],
};

export default PokemonList;
