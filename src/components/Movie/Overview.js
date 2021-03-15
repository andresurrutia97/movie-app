import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({ overview }) => {
  return <p className="text-sm text-justify text-white">{overview}</p>;
};

Overview.propTypes = {
  overview: PropTypes.string,
};

Overview.defaultProps = {
  overview: '',
};

export default Overview;
