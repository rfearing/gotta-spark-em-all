import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from 'COMPONENTS/Header';
import Footer from 'COMPONENTS/Footer';
import PokemonList from 'COMPONENTS/PokemonList';
import FavoritesList from 'COMPONENTS/FavoritesList';
import Pagination from 'COMPONENTS/Pagination';
import 'BASE/scss/base.scss';
import { getPokemon } from 'ACTIONS';
import css from './home.scss';

const Home = ({
  pokemon,
  count,
  next,
  previous,
}) => {
  const [currentPokemon, setCurrentPokemon] = useState(pokemon);
  const [currentPrevious, setCurrentPrevious] = useState(previous);
  const [currentNext, setCurrentNext] = useState(next);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /**
   * Request paginated pokemon and update state.
   * @param {String} link - Link provided by the PokeApi
   */
  const handlePagination = async (link) => {
    try {
      setLoading(true);
      const res = await getPokemon(link);
      setCurrentPokemon(res.results);
      setCurrentNext(res.next);
      setCurrentPrevious(res.previous);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  const handleAddToFavorites = (favorite) => {
    setFavorites([...favorites, favorite]);
  };

  const handleRemoveFromFavorites = (favorite) => {
    const newFavorites = favorites.filter((fave) => fave.name !== favorite.name);
    setFavorites(newFavorites);
  };

  /*
   * Pokemon List or Loading state
   */
  let content = (
    <>
      <h4 className="mb-3">There are {count} Pokemon!</h4>

      <PokemonList
        pokemon={currentPokemon}
        favorites={favorites}
        addFavorite={handleAddToFavorites}
        unFavorite={handleRemoveFromFavorites}
      />

      <Pagination
        handlePagination={handlePagination}
        next={currentNext}
        previous={currentPrevious}
      />
    </>
  );

  if (loading) {
    content = (
      <div className={css.centerContent}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className={`container mt-4 ${css.pageBody}`}>
        {/* Show error message */}
        {error && (<div className="alert alert-danger" role="alert">{error.message}</div>)}
        <div className="row">
          <div className="col-lg-3">
            <FavoritesList
              favorites={favorites}
              unFavorite={handleRemoveFromFavorites}
            />
          </div>
          <div className="col-lg">
            {content}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

Home.getInitialProps = async () => {
  const response = await getPokemon();
  return {
    pokemon: response.results || [],
    count: response.count || 0,
    next: response.next || '',
    previous: response.previous || '',
  };
};

Home.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object),
  count: PropTypes.number,
  next: PropTypes.string,
  previous: PropTypes.string,
};

Home.defaultProps = {
  pokemon: [],
  count: 0,
  next: '',
  previous: '',
};

export default Home;
