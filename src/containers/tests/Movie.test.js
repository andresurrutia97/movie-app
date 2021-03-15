import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';

import axiosInstance from '../../axios';
import * as ReduxHooks from '../../utils/reduxHooks';
import Movie from '../Movie';

jest.mock('../../axios');

describe('<Movie/>', () => {
  let store;
  const data = { data: { name: 'Batman', id: 12 } };
  const storeInitState = {
    movie: {
      movieInfo: null,
      loading: false,
      error: null,
    },
  };
  const history = { location: { pathname: 'movie/1234' } };
  let wrapper;

  beforeEach(() => {
    store = configureStore([thunk])(storeInitState);

    axiosInstance.get.mockResolvedValue(data);
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    jest
      .spyOn(ReduxHooks, 'useSelector')
      .mockImplementation(() => store.getState());
    jest
      .spyOn(ReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<Movie store={store} history={history} />);
  });

  afterEach(() => jest.clearAllMocks());

  it('should dispatch the fetchMovieInfo action to store', () => {
    expect(store.getActions()).toEqual(
      expect.arrayContaining([{ type: 'FETCH_MOVIE_START' }])
    );
    expect(store.getActions()).toEqual(
      expect.arrayContaining([
        { type: 'FETCH_MOVIE_SUCCESS', movie: data.data },
      ])
    );
  });

  it('should dispatch the fetchFavoriteList() action to store', () => {
    expect(store.getActions()).toEqual(
      expect.arrayContaining([{ type: 'FETCH_FAVORITELIST_START' }])
    );
  });

  it('should dispatch the addFavorite() action to store', () => {
    wrapper.props().addFav();
    expect(store.getActions()).toEqual(
      expect.arrayContaining([{ type: 'ADD_FAVORITE_START' }])
    );
  });

  it('should dispatch the fetchFavoriteList() action to store', () => {
    wrapper.props().removeFav();
    expect(store.getActions()).toEqual(
      expect.arrayContaining([{ type: 'REMOVE_FAVORITE_START' }])
    );
  });
});
