import PropTypes from 'prop-types';
import { getIdFromUrl, getPokeImage } from 'BASE/utils';
import { FaStar, FaRegStar } from 'react-icons/fa';
import cx from 'classnames';
import css from './index.scss';

const Pokemon = ({
  pokemon,
  className,
  isFavorited,
  addFavorite,
  unFavorite,
}) => {
  const { name, url } = pokemon;
  const id = getIdFromUrl(url);
  const imageUrl = getPokeImage(id);
  const buttonClass = cx('mx-2 btn btn-outline-secondary', { [css.favorite]: isFavorited });

  return (
    <li className={`list-group-item ${className}`}>
      <h4>{name}</h4>
      <img
        alt={`Small icon for ${name}`}
        src={imageUrl}
      />
      <div className="d-flex">
        {
          isFavorited ? (
            <button
              type="button"
              className={buttonClass}
              onClick={() => unFavorite(pokemon)}
            >
              <FaStar />
            </button>
          ) : (
            <button
              type="button"
              className={buttonClass}
              onClick={() => addFavorite(pokemon)}
            >
              <FaRegStar />
            </button>
          )
        }
      </div>
    </li>
  );
};

Pokemon.propTypes = {
  isFavorited: PropTypes.bool,
  className: PropTypes.string,
  addFavorite: PropTypes.func,
  unFavorite: PropTypes.func,
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

Pokemon.defaultProps = {
  addFavorite: () => null,
  unFavorite: () => null,
  className: '',
  isFavorited: false,
};

export default Pokemon;
