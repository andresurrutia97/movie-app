import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from '../utils/reduxHooks';
import { fetchUserInfo } from '../store/actions/UserActions';
import Header from '../components/Navigation/Header';
import Sidebar from '../components/Navigation/Sidebar';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const [openSidebar, setOpenSidebar] = React.useState(false);
  /**
   * handleOpenSidebar() controls the opening and
   * closing of the sidebar
   */
  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="flex">
      <Header openSidebarHandler={handleOpenSidebar} />
      <Sidebar open={openSidebar} openHandler={handleOpenSidebar} />
      <div className="w-full h-full mt-16px md:mt-0">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
