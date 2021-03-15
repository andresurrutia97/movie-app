import {
  FETCH_FAVORITELIST_START,
  FETCH_FAVORITELIST_SUCCESS,
  FETCH_FAVORITELIST_FAIL,
  FETCH_FAVORITES_START,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_FAIL,
  ADD_FAVORITE_START,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAIL,
  REMOVE_FAVORITE_START,
  REMOVE_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_FAIL,
} from '../actionTypes/FavoritesActionTypes';
import {
  getFavoritesMoviesList,
  addFavoriteMovie,
  removeFavoriteMovie,
} from '../api/userFeaturesServices';
import { getMovie } from '../api/moviesServices';

// Fetch favorites movies
export const fetchFavoritesStart = () => ({ type: FETCH_FAVORITES_START });

export const fetchFavoritesSuccess = (favs) => ({
  type: FETCH_FAVORITES_SUCCESS,
  favs,
});

export const fetchFavoritesFail = (error) => ({
  type: FETCH_FAVORITES_FAIL,
  error,
});

export const fetchFavorites = (movies) => (dispatch) => {
  dispatch(fetchFavoritesStart());
  const promises = Object.keys(movies).map((item) =>
    getMovie(item).then((res) => res.data)
  );

  return Promise.all(promises)
    .then((results) => {
      dispatch(fetchFavoritesSuccess(results));
    })
    .catch((error) => {
      dispatch(fetchFavoritesFail(error));
    });
};

// Fetch favorites list
export const fetchFavoriteListStart = () => ({
  type: FETCH_FAVORITELIST_START,
});

export const fetchFavoriteListSuccess = (favList) => ({
  type: FETCH_FAVORITELIST_SUCCESS,
  favList,
});

export const fetchFavoriteListFail = (error) => ({
  type: FETCH_FAVORITELIST_FAIL,
  error,
});

export const fetchFavoriteList = () => (dispatch) => {
  dispatch(fetchFavoriteListStart());
  return getFavoritesMoviesList()
    .then((res) => {
      dispatch(fetchFavoriteListSuccess(res.data));
      dispatch(fetchFavorites(res.data));
    })
    .catch((error) => {
      dispatch(fetchFavoriteListFail(error));
    });
};

const shouldFetchFavoritesList = (state) => {
  const { favoritesList, loadingFavList } = state.favorites;
  if (!favoritesList) {
    return true;
  }
  if (loadingFavList) {
    return false;
  }
};

export const fetchFavoritesListIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchFavoritesList(getState())) dispatch(fetchFavoriteList());
};

// Add favorite
export const addFavoriteStart = () => ({ type: ADD_FAVORITE_START });

export const addFavoriteSucces = (added) => ({
  type: ADD_FAVORITE_SUCCESS,
  added,
});

export const addFavoriteFail = (error) => ({
  type: ADD_FAVORITE_FAIL,
  error,
});

export const addFavorite = (movieId) => (dispatch) => {
  dispatch(addFavoriteStart());
  return addFavoriteMovie(movieId)
    .then((res) => {
      dispatch(addFavoriteSucces(res));
      dispatch(fetchFavoriteList());
    })
    .catch((error) => {
      dispatch(addFavoriteFail(error));
    });
};

// Remove favorite
export const removeFavoriteStart = () => ({ type: REMOVE_FAVORITE_START });

export const removeFavoriteSucces = (removed) => ({
  type: REMOVE_FAVORITE_SUCCESS,
  removed,
});

export const removeFavoriteFail = (error) => ({
  type: REMOVE_FAVORITE_FAIL,
  error,
});

export const removeFavorite = (movieId) => {
  return (dispatch) => {
    dispatch(removeFavoriteStart());
    return removeFavoriteMovie(movieId)
      .then((res) => {
        dispatch(removeFavoriteSucces(res));
        dispatch(fetchFavoriteList());
      })
      .catch((error) => {
        dispatch(removeFavoriteFail(error));
      });
  };
};
