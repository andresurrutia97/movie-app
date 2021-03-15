import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';

import axiosInstance from '../../axios';

import * as ReduxHooks from '../../utils/reduxHooks';
import Home from '../Home';
import { fakeStore } from '../../utils/fakeStore';

jest.mock('../../axios');

describe('<Home/>', () => {
  let store;
  const data = { data: { results: [{ name: 'Batman', id: 12 }] } };
  const storeInitState = fakeStore;

  beforeEach(() => {
    store = configureStore([thunk])(storeInitState);

    axiosInstance.get.mockResolvedValue(data);
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    jest
      .spyOn(ReduxHooks, 'useSelector')
      .mockImplementation(() => store.getState());
    jest
      .spyOn(ReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    shallow(<Home store={store} />);
  });

  afterEach(() => jest.clearAllMocks());

  it('should dispatch the fetchPopularMovies action to store', () => {
    expect(store.getActions()).toEqual(
      expect.arrayContaining([{ type: 'FETCH_POPULAR_MOVIES_START' }])
    );
    expect(store.getActions()).toEqual(
      expect.arrayContaining([
        { type: 'FETCH_POPULAR_MOVIES_SUCCESS', movies: data.data.results },
      ])
    );
  });

  it('should dispatch fetchTopRatedMovies() action to store', () => {
    expect(store.getActions()).toEqual(
      expect.arrayContaining([{ type: 'FETCH_TOP_RATED_MOVIES_START' }])
    );
    expect(store.getActions()).toEqual(
      expect.arrayContaining([
        { type: 'FETCH_TOP_RATED_MOVIES_SUCCESS', movies: data.data.results },
      ])
    );
  });

  it('should dispatch fetchFavoriteList() action to store', () => {
    expect(store.getActions()).toEqual(
      expect.arrayContaining([{ type: 'FETCH_FAVORITELIST_START' }])
    );
  });
});
