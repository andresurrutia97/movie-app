import React from 'react';
import PropTypes from 'prop-types';

const DropdownButton = ({ open, img }) => {
  return (
    <button
      type="button"
      onClick={open}
      className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 custom-blue-border focus:outline-none"
    >
      <img className="h-full w-full object-cover" src={img} alt="Your avatar" />
    </button>
  );
};

DropdownButton.propTypes = {
  open: PropTypes.func,
  img: PropTypes.string,
};

DropdownButton.defaultProps = {
  open: () => {},
  img: '',
};

export default DropdownButton;
