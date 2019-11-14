import React from 'react';
import Header from 'COMPONENTS/header';
import Footer from 'COMPONENTS/footer';
import css from 'BASE/scss/base.scss';

const Home = () => (
  <>
    <Header />
    <div className={`container mt-4 ${css.pageBody}`}>
      <h1>COMING SOON</h1>
    </div>
    <Footer />
  </>
);

export default Home;
