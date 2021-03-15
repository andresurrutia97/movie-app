import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

import SidebarOptionsItem from './SidebarOptionsItem';

const SidebarOptions = ({ routes, close }) => {
  const { logout } = useAuth0();
  return (
    <ul className="w-full h-full mt-10 flex flex-col justify-between text-gray-300">
      <div>
        {routes.map(({ path, name }) => {
          return (
            <li
              className="item-sidebar"
              key={path}
              onClick={close}
              role="presentation"
            >
              <SidebarOptionsItem path={path} name={name} />
            </li>
          );
        })}
      </div>
      <li
        onClick={() => logout()}
        role="presentation"
        className="flex justify-between ml-2 itms-center text-gray-400 py-2 px-5 cursor-pointer"
      >
        Logout
        <span className="material-icons">exit_to_app</span>
      </li>
    </ul>
  );
};

SidebarOptions.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  close: PropTypes.func.isRequired,
};

export default SidebarOptions;
