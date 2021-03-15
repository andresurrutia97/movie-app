import React from 'react';
import PropTypes from 'prop-types';

const FavoriteToggle = ({ isFav, add, remove, movieId }) => {
  const controls = (
    <button
      type="button"
      className="flex items-center justify-center focus:outline-none bg-gray-800 rounded-full p-1 shadow-md "
      onClick={() => (isFav ? remove(movieId) : add(movieId))}
    >
      <span
        className={`material-icons  custom-blue-text  ${
          isFav ? 'custom-blue-text' : 'text-black'
        }`}
      >
        star
      </span>
    </button>
  );

  return <>{controls}</>;
};

FavoriteToggle.propTypes = {
  isFav: PropTypes.bool,
  add: PropTypes.func,
  remove: PropTypes.func,
  movieId: PropTypes.number,
};

FavoriteToggle.defaultProps = {
  isFav: false,
  add: () => {},
  remove: () => {},
  movieId: null,
};

export default FavoriteToggle;
