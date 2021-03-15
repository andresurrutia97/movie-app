import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
  <div className="w-full h-full flex justify-center items-center">
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
};

Content.defaultProps = {
  children: null,
};

export default Content;
