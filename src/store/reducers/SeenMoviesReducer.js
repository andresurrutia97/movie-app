import {
  FETCH_SEENLIST_START,
  FETCH_SEENLIST_SUCCESS,
  FETCH_SEENLIST_FAIL,
  FETCH_SEEN_START,
  FETCH_SEEN_SUCCESS,
  FETCH_SEEN_FAIL,
  ADD_SEEN_START,
  ADD_SEEN_SUCCESS,
  ADD_SEEN_FAIL,
} from '../actionTypes/SeenMoviesActionsTypes';

const initState = {
  // Seen List
  seenList: null,
  loadingSeenList: false,
  errorSeenList: null,
  // Seen movies
  seen: null,
  loadingSeen: false,
  errorSeen: null,
  // Add seen
  addSeen: null,
  loadingAddSeen: false,
  errorAddSeen: null,
};

// seen list
const fetchSeenListStart = (state) => ({
  ...state,
  loadingSeenList: true,
  errorSeenList: null,
});

const fetchSeenListSuccess = (state, action) => ({
  ...state,
  seenList: action.favList,
  loadingSeenList: false,
  errorSeenList: null,
});

const fetchSeenListFail = (state, action) => ({
  ...state,
  errorSeenList: action.error,
  loadingSeenList: false,
});

// seen movies
const fetchSeenStart = (state) => ({
  ...state,
  loadingSeen: true,
  errorSeen: null,
});

const fetchSeenSuccess = (state, action) => ({
  ...state,
  seen: action.seen,
  loadingSeen: false,
  errorSeen: null,
});

const fetchSeenFail = (state, action) => ({
  ...state,
  errorSeen: action.error,
  loadingSeen: false,
});

// Add seen
const addSeenStart = (state) => ({
  ...state,
  loadingAddSeen: true,
  errorAddSeen: null,
});

const addSeenSuccess = (state, action) => ({
  ...state,
  addSeen: action.added,
  loadingAddSeen: false,
  errorAddSeen: null,
});

const addSeenFail = (state, action) => ({
  ...state,
  errorAddSeen: action.error,
  loadingAddSeen: false,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    // seen List
    case FETCH_SEENLIST_START:
      return fetchSeenListStart(state);

    case FETCH_SEENLIST_SUCCESS:
      return fetchSeenListSuccess(state, action);

    case FETCH_SEENLIST_FAIL:
      return fetchSeenListFail(state, action);

    // seen movies
    case FETCH_SEEN_START:
      return fetchSeenStart(state);

    case FETCH_SEEN_SUCCESS:
      return fetchSeenSuccess(state, action);

    case FETCH_SEEN_FAIL:
      return fetchSeenFail(state, action);

    // Add seen
    case ADD_SEEN_START:
      return addSeenStart(state);

    case ADD_SEEN_SUCCESS:
      return addSeenSuccess(state, action);

    case ADD_SEEN_FAIL:
      return addSeenFail(state, action);

    default:
      return state;
  }
};

export default reducer;
