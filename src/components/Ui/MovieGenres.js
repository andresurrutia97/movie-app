import React from 'react';
import PropTypes from 'prop-types';

const MovieGenres = ({ genres }) => {
  const movieGenres = genres.map((genre) => genre.name);
  return <div className="my-4">{movieGenres.join(', ')}</div>;
};

MovieGenres.propTypes = {
  genres: PropTypes.array,
};

MovieGenres.defaultProps = {
  genres: [],
};

export default MovieGenres;
