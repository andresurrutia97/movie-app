import React from 'react';
import PropTypes from 'prop-types';

const DropdownItem = ({ children, clicked, close, icon }) => {
  const handleClick = () => {
    clicked();
    close();
  };

  return (
    <div
      onClick={() => handleClick()}
      role="presentation"
      className="flex justify-between itms-center text-gray-700 py-2 px-5 cursor-pointer"
    >
      {children}
      <span className="material-icons">{icon}</span>
    </div>
  );
};

DropdownItem.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func,
  clicked: PropTypes.func,
  icon: PropTypes.string,
};

DropdownItem.defaultProps = {
  children: null,
  clicked: () => {},
  close: () => {},
  icon: '',
};

export default DropdownItem;
