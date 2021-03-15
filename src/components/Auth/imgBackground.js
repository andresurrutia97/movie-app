import React from 'react';
import PropTypes from 'prop-types';

const imgBackground = ({ children, img }) => (
  <div
    className="w-screen h-screen bg-cover img-flip opacity-5  "
    style={{ backgroundImage: `url('${img}')` }}
  >
    {children}
  </div>
);

imgBackground.propTypes = {
  children: PropTypes.node,
  img: PropTypes.string,
};

imgBackground.defaultProps = {
  children: null,
  img: '',
};

export default imgBackground;
