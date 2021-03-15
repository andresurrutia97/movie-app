import React from 'react';
import PropTypes from 'prop-types';

import Routes from '../../../routes';
import Backdrop from '../../Ui/Backdrop';
import SidebarOptions from './SidebarOptions';
import logo from '../../../img/logoWeb.png';

const Sidebar = ({ open, openHandler }) => {
  const baseSidebarClass =
    'h-full sidebar-width bg-black fixed py-6 transition-transform duration-300 ease-in-out z-30 md:hidden';

  const sidebarClass = open
    ? [baseSidebarClass, 'sidebar-open']
    : [baseSidebarClass, 'sidebar-close'];

  return (
    <>
      <Backdrop show={open} closed={openHandler} />
      <div className={sidebarClass.join(' ')}>
        <div className="h-full flex flex-col items-center">
          <img className="w-48" src={logo} alt="logo" />
          <SidebarOptions close={openHandler} routes={Routes} />
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  openHandler: PropTypes.func.isRequired,
};

export default Sidebar;
