import PropTypes from 'prop-types';
import { getIdFromUrl, getPokeImage } from 'BASE/utils';
import css from './results.scss';

const Result = ({
  pokemon,
}) => {
  const { name, url } = pokemon;
  const id = getIdFromUrl(url);
  const imageUrl = getPokeImage(id);

  return (
    <li className={`list-group-item ${css.result}`}>
      <div className="d-flex flex-column align-items-center">
        <h4>{name}</h4>
        <img src={imageUrl} />
      </div>
    </li>
  );
};

Result.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Result;
