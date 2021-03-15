import React from 'react';
import PropTypes from 'prop-types';

const MovieTitle = ({ title }) => (
  <h2 className="font-bold text-lg md:text-4xl lg:text-5xl">{title}</h2>
);

MovieTitle.propTypes = {
  title: PropTypes.string,
};

MovieTitle.defaultProps = {
  title: '',
};

export default MovieTitle;
