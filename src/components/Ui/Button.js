import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type }) => {
  const baseClass = 'w-full focus:outline-none text-white py-2 px-4 rounded-md';

  let classes;

  switch (type) {
    case 'outlined':
      classes = [baseClass, 'border border-2 custom-blue-border bg-black'].join(
        ' '
      );
      break;

    default:
      classes = [baseClass, 'custom-blue-bg'].join(' ');
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: 'Click me',
  onClick: () => {},
  type: '',
};

export default Button;
