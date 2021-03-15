import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = ({ clicked }) => {
  return (
    <div className="block absolute left-0 md:hidden">
      <button
        onClick={clicked}
        type="button"
        className="flex items-center text-white"
      >
        <span className="material-icons">menu</span>
      </button>
    </div>
  );
};

ToggleButton.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default ToggleButton;
