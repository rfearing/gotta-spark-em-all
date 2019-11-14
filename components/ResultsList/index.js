import PropTypes from 'prop-types';
import Result from './result';
import css from './results.scss';

/**
 * Map over an array of pokemon. If no pokemon are found, return text.
 */
const ResultsList = ({
  pokemon,
  next,
  previous,
}) => {

  if (!pokemon || pokemon.length === 0) {
    return <h4>No Pokemon</h4>;
  }

  const pokeList = pokemon.map((p) => <Result key={p.name} pokemon={p} />);

  return (
    <div>
      <div>
        <ul className={css.resultsList}>
          {pokeList}
        </ul>
      </div>
    </div>

  );
};

ResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  next: PropTypes.string,
  previous: PropTypes.string,
};

ResultsList.defaultProps = {
  results: [],
  next: null,
  previous: null,
};

export default ResultsList;
