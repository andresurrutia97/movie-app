import React from 'react';
import PropTypes from 'prop-types';

const MovieOverview = ({ overview }) => (
  <p className="hidden md:block text-md">{overview}</p>
);

MovieOverview.propTypes = {
  overview: PropTypes.string,
};

MovieOverview.defaultProps = {
  overview: '',
};

export default MovieOverview;
