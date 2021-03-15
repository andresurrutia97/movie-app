import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useSelector } from '../../../../utils/reduxHooks';
import DropdownItem from './DropdownItem';
import DropdownButton from './DropdownButton';
import dafaultUserImg from '../../../../img/default-user-image.png';

const UserDropdown = ({ history }) => {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.user.userInfo,
  }));
  const [open, setOpen] = React.useState(false);
  const { logout } = useAuth0();

  const UserImg = userInfo?.img || dafaultUserImg;

  /**
   * handleOpen() set state of the dropdown to
   * the opposite previous value
   */
  const handleOpen = () => {
    setOpen(!open);
  };

  /**
   * handleClose() close the dropdown
   */
  const handleClose = () => {
    setOpen(false);
  };

  let openClass = 'hidden';
  if (open) {
    openClass = 'block';
  }

  return (
    <div className="relative">
      <DropdownButton open={handleOpen} img={UserImg} />
      <div
        className={`${openClass} absolute right-0 mt-2 py-2 text-sm w-48 bg-white rounded custom-shadow`}
      >
        <DropdownItem
          close={handleClose}
          clicked={() => history.push('/user')}
          icon="person"
        >
          Profile
        </DropdownItem>
        <DropdownItem close={handleClose} clicked={logout} icon="exit_to_app">
          <div>Logout</div>
        </DropdownItem>
      </div>
    </div>
  );
};

UserDropdown.propTypes = {
  history: PropTypes.any.isRequired,
};

export default withRouter(UserDropdown);
