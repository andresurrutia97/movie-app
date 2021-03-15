import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <h2 className="font-semibold text-xl custom-blue-text uppercase text-center md:text-left md:text-4xl">
      {title}
    </h2>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: '',
};

export default Title;
