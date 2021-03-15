import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import ToggleButton from './ToggleButton';
import HeaderTitle from './HeaderTitle';
import HeaderOptions from './HeaderOptions';
import Routes from '../../../routes';

const Header = ({ openSidebarHandler }) => {
  const [navBackground, setNavBackground] = React.useState(
    'custom-black-header-grad'
  );
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY >= 10) {
        setNavBackground('custom-black-header');
      } else {
        setNavBackground('custom-black-header-grad');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`w-full h-16 fixed px-4 py-3 z-10 transition-colors duration-500 ${navBackground}`}
    >
      <div className="w-full flex justify-center items-center relative md:px-16 ">
        <ToggleButton clicked={openSidebarHandler} />
        <HeaderTitle title="Uruflix" />
        <HeaderOptions routes={Routes} />
      </div>
    </nav>
  );
};

Header.propTypes = {
  openSidebarHandler: PropTypes.func,
};

Header.defaultProps = {
  openSidebarHandler: () => {},
};

export default Header;
