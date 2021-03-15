import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import axios from 'axios';

import Layout from '../Layout';
import Header from '../../components/Navigation/Header';
import Sidebar from '../../components/Navigation/Sidebar';
import ToggleButton from '../../components/Navigation/Header/ToggleButton';

import * as ReduxHooks from '../../utils/reduxHooks';

jest.mock('axios');

describe('<Layout/>', () => {
  let wrapper;
  let store;
  const data = {
    data: {
      desc: 'Hi, im Andres and i like action movies and dogs',
      email: 'test@test.com',
      img: 'imgPath.jpg',
      name: 'Andres Urrutia Solarte f',
      tel: '3001231234',
    },
  };
  const component = (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
  const mockSetState = jest.fn();

  beforeEach(() => {
    axios.get.mockResolvedValue(data);
    jest
      .spyOn(React, 'useState')
      .mockImplementation((init) => [init, mockSetState]);

    store = configureStore([thunk])({});

    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    jest
      .spyOn(ReduxHooks, 'useSelector')
      .mockImplementation(() => store.getState());
    jest
      .spyOn(ReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);
    wrapper = mount(component);
  });

  afterEach(() => jest.clearAllMocks());

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain one instace of <Header/> and <Sidebar/>', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Sidebar)).toHaveLength(1);
  });

  it('should call the setState function when handleOpenSidebar() is called', () => {
    expect(mockSetState).toBeCalledTimes(0);
    wrapper.find(Header).find(ToggleButton).find('button').simulate('click');
    expect(mockSetState).toBeCalledTimes(1);
  });

  it('should dispatch the fetchUserInfo action', () => {
    expect(store.getActions()).toEqual(
      expect.arrayContaining([{ type: 'FETCH_USER_INFO_START' }])
    );
    expect(store.getActions()).toEqual(
      expect.arrayContaining([
        { type: 'FETCH_USER_INFO_SUCCESS', userInfo: data.data },
      ])
    );
  });
});
