import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SidebarOptionsItem = ({ path, name }) => {
  return (
    <NavLink
      activeClassName="active"
      className="flex items-center"
      to={path}
      exact
    >
      <div className="flag" />
      <span className="ml-5">{name}</span>
    </NavLink>
  );
};

SidebarOptionsItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SidebarOptionsItem;
