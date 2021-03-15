import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ show, closed }) => {
  const baseBackdropClass = 'fixed w-full h-full bg-black opacity-50 z-30';

  const backdropClass = show
    ? [baseBackdropClass, 'block']
    : [baseBackdropClass, 'hidden'];

  return (
    <div
      className={backdropClass.join(' ')}
      role="presentation"
      onClick={closed}
    />
  );
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  closed: PropTypes.func,
};

Backdrop.defaultProps = {
  closed: () => {},
};

export default Backdrop;
