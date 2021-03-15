import React from 'react';
import PropTypes from 'prop-types';

const InfoDetails = ({ title, name }) => {
  return (
    <div className="flex flex-col items-center mx-2 md:flex-row md:mx-0 md:mr-2">
      <span className="text-sm text-white">{title}</span>
      <span className="hidden md:block md:mr-2">:</span>
      <span className="font-semibold text-white md:mr-2">{name}</span>
    </div>
  );
};

InfoDetails.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
};

InfoDetails.defaultProps = {
  name: '',
};
export default InfoDetails;
