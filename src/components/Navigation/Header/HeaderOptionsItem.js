import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeaderOptionsItem = ({ path, name }) => {
  return (
    <NavLink className="flex items-center ml-6" to={path} exact>
      <span>{name}</span>
    </NavLink>
  );
};

HeaderOptionsItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HeaderOptionsItem;
