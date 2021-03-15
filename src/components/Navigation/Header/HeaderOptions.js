import React from 'react';
import PropTypes from 'prop-types';

import HeaderOptionsItem from './HeaderOptionsItem';
import Dropdown from './UserDropdown/UserDropdown';

const HeaderOptions = ({ routes }) => {
  const options = routes.map(({ path, name }) => {
    return (
      <li key={path}>
        <HeaderOptionsItem path={path} name={name} />
      </li>
    );
  });

  return (
    <div className=" hidden md:ml-8 md:w-full md:block md:flex md:justify-between">
      <ul className="flex flex-col text-sm text-white md:flex-row md:items-center">
        {options}
      </ul>
      <Dropdown />
    </div>
  );
};

HeaderOptions.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default HeaderOptions;
