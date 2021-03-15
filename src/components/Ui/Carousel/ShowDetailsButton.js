import React from 'react';
import PropTypes from 'prop-types';

import './ShowDetailsButton.css';

const ShowDetailsButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className="show-details-button">
    <span className="material-icons show-details-button__icon">
      keyboard_arrow_down
    </span>
  </button>
);

ShowDetailsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShowDetailsButton;
