import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import axios from 'axios';
import * as ReduxHooks from '../../utils/reduxHooks';
import User from '../User';
import UserView from '../../views/User';

jest.mock('axios');

describe('<User/>', () => {
  let store;
  let wrapper;
  const data = {
    data: {
      desc: 'Hi, im Andres and i like action movies and dogs',
      email: 'test@test.com',
      img: 'imgPath.jpg',
      name: 'Andres Urrutia Solarte f',
      tel: '3001231234',
    },
  };
  const storeInitState = {
    movies: {
      userInfo: null,
      loading: false,
      error: null,
      userUpdate: null,
      loadingUpdate: false,
      errorUpdate: null,
    },
  };

  beforeEach(() => {
    store = configureStore([thunk])(storeInitState);

    axios.get.mockResolvedValue(data);
    axios.patch.mockResolvedValue({ ...data, status: 200 });

    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    jest
      .spyOn(ReduxHooks, 'useSelector')
      .mockImplementation(() => store.getState());
    jest
      .spyOn(ReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    wrapper = mount(
      <BrowserRouter>
        <User store={store} />
      </BrowserRouter>
    );
  });

  afterEach(() => jest.clearAllMocks());

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

  it('should contain an instance of <UserView/>', () => {
    expect(wrapper.find(UserView)).toHaveLength(1);
  });

  it('should dispatch the fetchUserInfo action', () => {
    wrapper.find(UserView).props().updateInfo(data);

    expect(store.getActions()).toEqual(
      expect.arrayContaining([{ type: 'UPDATE_USER_INFO_START' }])
    );
  });
});
