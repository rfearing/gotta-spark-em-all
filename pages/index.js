import React from 'react';
import Header from 'COMPONENTS/Header';
import Footer from 'COMPONENTS/Footer';
import ResultsList from 'COMPONENTS/ResultsList';
import css from 'BASE/scss/base.scss';
import { getPokemon } from 'ACTIONS';

const Home = ({
  pokemon,
  count,
  next,
  previous,
}) => {
  return (
    <>
      <Header />
      <div className={`container mt-4 ${css.pageBody}`}>
        <h2>There are {count} Pokemon!</h2>
        <ResultsList
          pokemon={pokemon}
          count={count}
          next={next}
          previous={previous}
        />
      </div>
      <Footer />
    </>
  );
};

Home.getInitialProps = async ({ req }) => {
  const response = await getPokemon();
  return {
    pokemon: response.results || [],
    count: response.count || 0,
    next: response.next || '',
    previous: response.previous || '',
  }
}

export default Home;
