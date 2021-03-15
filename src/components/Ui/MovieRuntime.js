import React from 'react';
import PropTypes from 'prop-types';

const MovieRuntime = ({ runtime }) => (
  <div className="w-auto inline-block rounded-full custom-pink-bg py-1 px-3 my-3">
    {`${runtime} min`}
  </div>
);

MovieRuntime.propTypes = {
  runtime: PropTypes.number,
};

MovieRuntime.defaultProps = {
  runtime: 0,
};

export default MovieRuntime;
