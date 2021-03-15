import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axiosInstance from '../../../../axios';
import * as actions from '../../../actions/SeenMoviesActions';
import * as actionTypes from '../../../actionTypes/SeenMoviesActionsTypes';
import { fakeStore } from '../../../../utils/fakeStore';

jest.mock('../../../../axios');

describe('Seen movies actions creator', () => {
  let store;
  const data = { data: { results: [{ name: 'Batman', id: 12 }] } };
  const storeInitState = fakeStore;

  beforeEach(() => {
    store = configureStore([thunk])(storeInitState);
    axiosInstance.get.mockImplementationOnce(() => Promise.resolve({ data }));
  });

  afterEach(() => jest.clearAllMocks());

  it('should create an action to fetch seen movies', () => {
    const expectedAction = {
      type: actionTypes.FETCH_SEEN_START,
    };
    expect(actions.fetchSeenStart()).toEqual(expectedAction);
  });

  it('should create an action when fetching seen movies has been done', () => {
    const seen = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.FETCH_SEEN_SUCCESS,
      seen,
    };
    expect(actions.fetchSeenSuccess(seen)).toEqual(expectedAction);
  });

  it('should create an action when the fetching returns an error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.FETCH_SEEN_FAIL,
      error,
    };
    expect(actions.fetchSeenFail(error)).toEqual(expectedAction);
  });

  it('should create FETCH_SEEN_START and FETCH_SEEN_SUCCESS when fetching favorite movies has been done', () => {
    axiosInstance.get.mockImplementationOnce(() => Promise.resolve({ data }));

    const favsMoviesIds = { 123: { id: 123 } };
    const expectedAction = [
      {
        type: actionTypes.FETCH_SEEN_START,
      },
      { type: actionTypes.FETCH_SEEN_SUCCESS, seen: [data] },
    ];
    store.dispatch(actions.fetchSeen(favsMoviesIds)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  // fetch list
  it('should create an action to fetch seen movies list', () => {
    const expectedAction = {
      type: actionTypes.FETCH_SEENLIST_START,
    };
    expect(actions.fetchSeenListStart()).toEqual(expectedAction);
  });

  it('should create an action when fetching seen movies list has been done', () => {
    const favList = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.FETCH_SEENLIST_SUCCESS,
      favList,
    };
    expect(actions.fetchSeenListSuccess(favList)).toEqual(expectedAction);
  });

  it('should create an action when the fetching returns an error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.FETCH_SEENLIST_FAIL,
      error,
    };
    expect(actions.fetchSeenListFail(error)).toEqual(expectedAction);
  });

  // add favorite
  it('should create an action to add a favorite movies', () => {
    const expectedAction = {
      type: actionTypes.ADD_SEEN_START,
    };
    expect(actions.addSeenStart()).toEqual(expectedAction);
  });

  it('should create an action when addind a favorite movie has been done', () => {
    const added = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.ADD_SEEN_SUCCESS,
      added,
    };
    expect(actions.addSeenSucces(added)).toEqual(expectedAction);
  });

  it('should create an action when the adding a favorite movie returns an error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.ADD_SEEN_FAIL,
      error,
    };
    expect(actions.addSeenFail(error)).toEqual(expectedAction);
  });
});
