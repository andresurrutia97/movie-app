import React from 'react';
import PropTypes from 'prop-types';

import './SliderWrapper.css';

const SliderWrapper = ({ children }) => (
  <div className="slider-wrapper">{children}</div>
);

SliderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SliderWrapper;
