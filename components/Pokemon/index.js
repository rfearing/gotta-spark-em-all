import React from 'react';
import PropTypes from 'prop-types';
import { getIdFromUrl, getPokeImage } from 'BASE/utils';
import { FaStar, FaRegStar } from 'react-icons/fa';
import cx from 'classnames';
import css from './style.scss';

const Pokemon = ({
  id,
  pokemon,
  className,
  isFavorited,
  addFavorite,
  unFavorite,
}) => {
  const { name, url } = pokemon;
  const pokeId = getIdFromUrl(url);
  const imageUrl = getPokeImage(pokeId);
  const buttonClass = cx('mx-2 btn btn-outline-secondary', { [css.favorite]: isFavorited });

  return (
    <li id={id} className={`list-group-item ${className}`}>
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
              <p hidden>Remove {name} from favorites</p>
              <FaStar />
            </button>
          ) : (
            <button
              type="button"
              className={buttonClass}
              onClick={() => addFavorite(pokemon)}
            >
              <p hidden>Add {name} to favorites</p>
              <FaRegStar />
            </button>
          )
        }
      </div>
    </li>
  );
};

Pokemon.propTypes = {
  id: PropTypes.string.isRequired,
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
