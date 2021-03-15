import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Router, BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import UserView from '../User';
import Spinner from '../../components/Ui/Spinner';
import Error from '../../components/Ui/Error';
import UserPicture from '../../components/User/UserPicture';
import UserForm from '../../components/User/UserForm';
import Button from '../../components/Ui/Button';

describe('<User/>', () => {
  let wrapper;
  const initProps = {
    userInfo: null,
    error: null,
    loading: false,
    userUpdate: {},
    loadingUpdate: false,
    errorUpdate: null,
    updateInfo: () => {},
  };
  const data = {
    data: {
      desc: 'Hi, im Andres and i like action movies and dogs',
      email: 'test@test.com',
      img: 'imgPath.jpg',
      name: 'Andres Urrutia Solarte f',
      tel: '3001231234',
    },
  };
  const mockSetState = jest.fn();
  const history = createMemoryHistory();
  const component = (
    <BrowserRouter>
      <UserView {...initProps} />
    </BrowserRouter>
  );

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation((init) => [init, mockSetState]);
    jest.spyOn(React, 'useCallback').mockImplementation((callback) => callback);
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    jest.spyOn(history, 'goBack');
    wrapper = mount(
      <Router history={history}>
        <UserView {...initProps} />
      </Router>
    );
  });

  it('should render correcty ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain a instance of <Spinner/> while no info ', () => {
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('should contain an instance of <VideoPlayer/>, <InfoMovie/> if latestMovie prop contains info', () => {
    wrapper.setProps({
      children: <UserView userInfo={data} />,
    });
    expect(wrapper.find(UserForm)).toHaveLength(1);
    expect(wrapper.find(UserPicture)).toHaveLength(1);
  });

  it('should contain 1 instance of <Error/> if error prop caintains info ', () => {
    wrapper.setProps({ children: <UserView error={{ error: 'error' }} /> });
    expect(wrapper.find(Error)).toHaveLength(1);
  });

  it('should call the update user info function when click on the "save" button ', () => {
    const updateUserInfoMock = jest.fn();
    wrapper.setProps({
      children: <UserView userInfo={data} updateInfo={updateUserInfoMock} />,
    });
    wrapper.find(Button).at(1).simulate('click');
    expect(updateUserInfoMock).toBeCalledTimes(1);
  });

  it('should call the goBack() function of history when click on the "cancel" button ', () => {
    wrapper.setProps({
      children: <UserView userInfo={data} />,
    });
    wrapper.find(Button).at(0).simulate('click');
    expect(history.goBack).toBeCalledTimes(1);
  });
});
