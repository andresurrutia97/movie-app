import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axios from 'axios';
import * as actions from '../../../actions/SeenMoviesActions';
import * as actionTypes from '../../../actionTypes/SeenMoviesActionsTypes';
import { fakeStore } from '../../../../utils/fakeStore';

jest.mock('axios');

describe('Seen movies actions creator firebase calls', () => {
  let store;
  const data = { data: { results: [{ name: 'Batman', id: 12 }] } };
  const storeInitState = fakeStore;

  beforeEach(() => {
    store = configureStore([thunk])(storeInitState);
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    axios.patch.mockImplementationOnce(() => Promise.resolve({ data }));
  });

  afterEach(() => jest.clearAllMocks());

  it('should create FETCH_SEENLIST_START and FETCH_SEENLIST_SUCCESS when fetching favorite movies list has been done', async () => {
    const expectedAction = [
      {
        type: actionTypes.FETCH_SEENLIST_START,
      },
      { type: actionTypes.FETCH_SEENLIST_SUCCESS, favList: data },
      { type: actionTypes.FETCH_SEEN_START },
    ];

    store.dispatch(actions.fetchSeenList()).then(() => {
      expect(store.getActions()).toEqual(
        expect.arrayContaining(expectedAction)
      );
    });
  });

  it('should create ADD_FAVORITE_START and ADD_FAVORITE_SUCCESS when adding favorite movie has been done', async () => {
    const expectedAction = [
      {
        type: actionTypes.ADD_SEEN_START,
      },
      { type: actionTypes.ADD_SEEN_SUCCESS, added: { data } },
      { type: actionTypes.FETCH_SEENLIST_START },
    ];

    store.dispatch(actions.addSeen(21)).then(() => {
      expect(store.getActions()).toEqual(
        expect.arrayContaining(expectedAction)
      );
    });
  });
});
