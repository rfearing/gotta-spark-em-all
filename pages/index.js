import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from 'COMPONENTS/Header';
import Footer from 'COMPONENTS/Footer';
import ResultsList from 'COMPONENTS/ResultsList';
import Pagination from 'COMPONENTS/Pagination';
import css from 'BASE/scss/base.scss';
import { getPokemon } from 'ACTIONS';

const Home = ({
  pokemon,
  count,
  next,
  previous,
}) => {
  const [currentPokemon, setCurrentPokemon] = useState(pokemon);
  const [currentNext, setCurrentNext] = useState(next);
  const [currentPrevious, setCurrentPrevious] = useState(previous);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handlePagination = async (link) => {
    try {
      setLoading(true);
      const res = await getPokemon(link);
      setCurrentPokemon(res.results);
      setCurrentNext(res.next);
      setCurrentPrevious(res.previous);
      setLoading(false);
    } catch (e) {
      setError(e)
      setLoading(false);
    }
  };

  let content = (
    <>
      <h4>There are {count} Pokemon!</h4>
      {error && (<div className="alert alert-danger" role="alert">{error.message}</div>)}

      <ResultsList pokemon={currentPokemon} />

      <Pagination
        handlePagination={handlePagination}
        next={currentNext}
        previous={currentPrevious}
      />
    </>
  );

  if (loading) {
    content = (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className={`container mt-4 ${css.pageBody}`}>
        {content}
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
