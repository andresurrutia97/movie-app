import React from 'react';
import PropTypes from 'prop-types';

import './SlideButton.css';

const SlideButton = ({ onClick, type }) => {
  let classes = ['slide-button'];
  let icon = '';

  if (type === 'prev') {
    classes = [...classes, 'slide-button__prev'];
    icon = (
      <span className="material-icons slide-icon">keyboard_arrow_left</span>
    );
  }
  if (type === 'next') {
    classes = [...classes, 'slide-button__next'];
    icon = (
      <span className="material-icons slide-icon">keyboard_arrow_right</span>
    );
  }

  return (
    <button type="button" className={classes.join(' ')} onClick={onClick}>
      {icon}
    </button>
  );
};

SlideButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default SlideButton;
