import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axios from 'axios';
import * as actions from '../../../actions/FavoritesActions';
import * as actionTypes from '../../../actionTypes/FavoritesActionTypes';
import { fakeStore } from '../../../../utils/fakeStore';

jest.mock('axios');

describe('Favorite movies actions creator firebase calls', () => {
  let store;
  const data = { data: { results: [{ name: 'Batman', id: 12 }] } };
  const storeInitState = fakeStore;

  beforeEach(() => {
    store = configureStore([thunk])(storeInitState);
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    axios.patch.mockImplementationOnce(() => Promise.resolve({ data }));
    axios.delete.mockImplementationOnce(() => Promise.resolve({ data }));
  });

  afterEach(() => jest.clearAllMocks());

  it('should create FETCH_FAVORITELIST_START and FETCH_FAVORITELIST_SUCCESS when fetching favorite movies list has been done', async () => {
    const expectedAction = [
      {
        type: actionTypes.FETCH_FAVORITELIST_START,
      },
      { type: actionTypes.FETCH_FAVORITELIST_SUCCESS, favList: data },
      { type: actionTypes.FETCH_FAVORITES_START },
    ];

    store.dispatch(actions.fetchFavoriteList()).then(() => {
      expect(store.getActions()).toEqual(
        expect.arrayContaining(expectedAction)
      );
    });
  });

  it('should create ADD_FAVORITE_START and ADD_FAVORITE_SUCCESS when adding favorite movie has been done', async () => {
    const expectedAction = [
      {
        type: actionTypes.ADD_FAVORITE_START,
      },
      { type: actionTypes.ADD_FAVORITE_SUCCESS, added: { data } },
      { type: actionTypes.FETCH_FAVORITELIST_START },
    ];

    store.dispatch(actions.addFavorite(21)).then(() => {
      expect(store.getActions()).toEqual(
        expect.arrayContaining(expectedAction)
      );
    });
  });

  it('should create REMOVE_FAVORITE_START and REMOVE_FAVORITE_SUCCESS when removing favorite movie has been done', async () => {
    const expectedAction = [
      {
        type: actionTypes.REMOVE_FAVORITE_START,
      },
      { type: actionTypes.REMOVE_FAVORITE_SUCCESS, removed: { data } },
      { type: actionTypes.FETCH_FAVORITELIST_START },
    ];

    store.dispatch(actions.removeFavorite(21)).then(() => {
      expect(store.getActions()).toEqual(
        expect.arrayContaining(expectedAction)
      );
    });
  });
});
