import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Form from './UserForm';
import UserPicture from '../../components/User/UserPicture';
import UserForm from '../../components/User/UserForm';
import Button from '../../components/Ui/Button';
import Separator from '../../components/Ui/Separator';
import Spinner from '../../components/Ui/Spinner';
import Error from '../../components/Ui/Error';
import ViewsContent from '../../components/Ui/ViewsContent';
import ViewsTitle from '../../components/Ui/ViewsTitle';

import { inputOnChange } from '../../utils/inputOnChange';
import { userInfoShape, errorShape } from '../../utils/propTypes';

const User = ({
  userInfo,
  loading,
  error,
  userUpdate,
  loadingUpdate,
  errorUpdate,
  updateInfo,
  history,
}) => {
  const [controls, setControls] = React.useState({ ...Form });
  const [updated, setUpdated] = React.useState(false);

  /**
   * updateControlValues() update the values of form inputs
   * with the current user information
   */
  const updateControlValues = React.useCallback(() => {
    const { name, img, tel, desc } = userInfo;

    const newForm = {
      ...Form,
      name: { ...Form.name, value: name },
      tel: { ...Form.tel, value: tel },
      img: { ...Form.img, value: img },
      desc: { ...Form.desc, value: desc },
    };
    return newForm;
  }, [userInfo]);

  React.useEffect(() => {
    if (userInfo) {
      setControls(updateControlValues());
    }
  }, [updateControlValues, userInfo]);

  const formElementsArray = Object.keys(controls).map((control) => {
    return { id: control, config: controls[control] };
  });

  /**
   * inputOnchange() controls the changes of the
   * inputs in the form
   */
  const handleInputOnchange = (event, id) => {
    inputOnChange(controls, setControls, event, id);
  };

  /**
   * handleUserUpdate() update the user information
   */
  const handleUserUpdate = () => {
    const updatedInfo = {};
    Object.keys(controls).forEach((el) => {
      updatedInfo[el] = controls[el].value;
    });
    updateInfo(updatedInfo);
    setUpdated(true);
  };

  let content = <Spinner />;
  if (userInfo && !loading) {
    content = (
      <>
        <Separator />
        <div className="mt-6 flex flex-col md:flex-row">
          <UserPicture img={userInfo.img} />
          <UserForm
            elements={formElementsArray}
            onChange={handleInputOnchange}
          />
        </div>
        <Separator />
        <div className="pt-4 grid grid-cols-2 gap-4">
          <Button onClick={history.goBack} type="outlined">
            Cancel
          </Button>
          <Button onClick={handleUserUpdate}>Save</Button>
        </div>
      </>
    );
  }

  if (userUpdate && !loadingUpdate && updated) {
    if (userUpdate.status === 200) {
      alert('Succesfully updated');
      setUpdated(false);
    }
  }

  if (errorUpdate && updated) {
    alert('Couldnt update the user info');
    setUpdated(false);
  }

  if (error) {
    return <Error />;
  }

  return (
    <ViewsContent>
      <ViewsTitle>Profile</ViewsTitle>
      {content}
    </ViewsContent>
  );
};

User.propTypes = {
  userInfo: PropTypes.shape(userInfoShape),
  loading: PropTypes.bool,
  error: PropTypes.shape(errorShape),
  userUpdate: PropTypes.object,
  loadingUpdate: PropTypes.bool,
  errorUpdate: PropTypes.shape(errorShape),
  updateInfo: PropTypes.func,
  history: PropTypes.any.isRequired,
};

User.defaultProps = {
  userInfo: null,
  error: null,
  loading: false,
  userUpdate: {},
  loadingUpdate: false,
  errorUpdate: null,
  updateInfo: () => {},
};

export default withRouter(User);
