import React from 'react';
import PropTypes from 'prop-types';

const ViewsTitle = ({ children }) => {
  return (
    <div className="text-2xl text-white md:text-6xl text-center md:text-left">
      {children}
    </div>
  );
};

ViewsTitle.propTypes = {
  children: PropTypes.string,
};

ViewsTitle.defaultProps = {
  children: '',
};

export default ViewsTitle;
