import React from 'react';
import PropTypes from 'prop-types';

const HeaderTitle = ({ title }) => {
  return (
    <span className="font-semibold flex justify-center custom-blue-text text-2xl">
      {title}
    </span>
  );
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderTitle;
