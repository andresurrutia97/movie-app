import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axiosInstance from '../../../../axios';
import * as actions from '../../../actions/FavoritesActions';
import * as actionTypes from '../../../actionTypes/FavoritesActionTypes';
import { fakeStore } from '../../../../utils/fakeStore';

jest.mock('../../../../axios');

describe('Favorite movies actions creator', () => {
  let store;
  const data = { data: { results: [{ name: 'Batman', id: 12 }] } };
  const storeInitState = fakeStore;

  beforeEach(() => {
    store = configureStore([thunk])(storeInitState);
    axiosInstance.get.mockImplementationOnce(() => Promise.resolve({ data }));
  });

  afterEach(() => jest.clearAllMocks());

  it('should create an action to fetch favorites movies', () => {
    const expectedAction = {
      type: actionTypes.FETCH_FAVORITES_START,
    };
    expect(actions.fetchFavoritesStart()).toEqual(expectedAction);
  });

  it('should create an action when fetching favorite movies has been done', () => {
    const favs = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.FETCH_FAVORITES_SUCCESS,
      favs,
    };
    expect(actions.fetchFavoritesSuccess(favs)).toEqual(expectedAction);
  });

  it('should create an action when the fetching returns an error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.FETCH_FAVORITES_FAIL,
      error,
    };
    expect(actions.fetchFavoritesFail(error)).toEqual(expectedAction);
  });

  it('should create FETCH_FAVORITES_START and FETCH_FAVORITES_SUCCESS when fetching favorite movies has been done', () => {
    axiosInstance.get.mockImplementationOnce(() => Promise.resolve({ data }));

    const favsMoviesIds = { 123: { id: 123 } };
    const expectedAction = [
      {
        type: actionTypes.FETCH_FAVORITES_START,
      },
      { type: actionTypes.FETCH_FAVORITES_SUCCESS, favs: [data] },
    ];
    store.dispatch(actions.fetchFavorites(favsMoviesIds)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  // fetch list
  it('should create an action to fetch favorites movies list', () => {
    const expectedAction = {
      type: actionTypes.FETCH_FAVORITELIST_START,
    };
    expect(actions.fetchFavoriteListStart()).toEqual(expectedAction);
  });

  it('should create an action when fetching favorite movies list has been done', () => {
    const favList = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.FETCH_FAVORITELIST_SUCCESS,
      favList,
    };
    expect(actions.fetchFavoriteListSuccess(favList)).toEqual(expectedAction);
  });

  it('should create an action when the fetching returns an error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.FETCH_FAVORITELIST_FAIL,
      error,
    };
    expect(actions.fetchFavoriteListFail(error)).toEqual(expectedAction);
  });

  // add favorite
  it('should create an action to add a favorite movies', () => {
    const expectedAction = {
      type: actionTypes.ADD_FAVORITE_START,
    };
    expect(actions.addFavoriteStart()).toEqual(expectedAction);
  });

  it('should create an action when addind a favorite movie has been done', () => {
    const added = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.ADD_FAVORITE_SUCCESS,
      added,
    };
    expect(actions.addFavoriteSucces(added)).toEqual(expectedAction);
  });

  it('should create an action when the adding a favorite movie returns an error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.ADD_FAVORITE_FAIL,
      error,
    };
    expect(actions.addFavoriteFail(error)).toEqual(expectedAction);
  });
  // remove favorite
  it('should create an action to remove a favorite movies', () => {
    const expectedAction = {
      type: actionTypes.REMOVE_FAVORITE_START,
    };
    expect(actions.removeFavoriteStart()).toEqual(expectedAction);
  });

  it('should create an action when removing a favorite movie has been done', () => {
    const removed = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.REMOVE_FAVORITE_SUCCESS,
      removed,
    };
    expect(actions.removeFavoriteSucces(removed)).toEqual(expectedAction);
  });

  it('should create an action when the removing a favorite movie returns an error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.REMOVE_FAVORITE_FAIL,
      error,
    };
    expect(actions.removeFavoriteFail(error)).toEqual(expectedAction);
  });
});
