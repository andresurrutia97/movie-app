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
import { getSeenMoviesList, addSeenMovie } from '../api/userFeaturesServices';
import { getMovie } from '../api/moviesServices';

// Fetch Seen movies
export const fetchSeenStart = () => ({ type: FETCH_SEEN_START });

export const fetchSeenSuccess = (seen) => ({
  type: FETCH_SEEN_SUCCESS,
  seen,
});

export const fetchSeenFail = (error) => ({
  type: FETCH_SEEN_FAIL,
  error,
});

export const fetchSeen = (movies) => (dispatch) => {
  dispatch(fetchSeenStart());
  const promises = Object.keys(movies).map((item) => {
    return getMovie(item).then((res) => res.data);
  });

  return Promise.all(promises)
    .then((results) => {
      dispatch(fetchSeenSuccess(results));
    })
    .catch((error) => {
      dispatch(fetchSeenFail(error));
    });
};

// Fetch Seen list
export const fetchSeenListStart = () => ({ type: FETCH_SEENLIST_START });

export const fetchSeenListSuccess = (favList) => ({
  type: FETCH_SEENLIST_SUCCESS,
  favList,
});

export const fetchSeenListFail = (error) => ({
  type: FETCH_SEENLIST_FAIL,
  error,
});

export const fetchSeenList = () => {
  return (dispatch) => {
    dispatch(fetchSeenListStart());
    return getSeenMoviesList()
      .then((res) => {
        dispatch(fetchSeenListSuccess(res.data));
        dispatch(fetchSeen(res.data));
      })
      .catch((error) => {
        dispatch(fetchSeenListFail(error));
      });
  };
};

const shouldFetchSeenList = (state) => {
  const { seenList, loadingSeenList } = state.seen;
  if (!seenList) {
    return true;
  }
  if (loadingSeenList) {
    return false;
  }
};

export const fetchSeenListIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchSeenList(getState())) return dispatch(fetchSeenList());
};

// Add Seen
export const addSeenStart = () => ({
  type: ADD_SEEN_START,
});

export const addSeenSucces = (added) => ({
  type: ADD_SEEN_SUCCESS,
  added,
});

export const addSeenFail = (error) => ({
  type: ADD_SEEN_FAIL,
  error,
});

export const addSeen = (movieId) => (dispatch) => {
  dispatch(addSeenStart());
  return addSeenMovie(movieId)
    .then((res) => {
      dispatch(addSeenSucces(res));
      dispatch(fetchSeenList());
    })
    .catch((error) => {
      dispatch(addSeenFail(error));
    });
};
