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

const initState = {
  // Favorites List
  favoritesList: null,
  loadingFavList: false,
  errorFavList: null,

  // Favorites movies
  favorites: null,
  loadingFavs: false,
  errorFavs: null,

  // Add favorite
  addFavorite: null,
  loadingAddFav: false,
  errorAddFav: null,

  // Remove favorite
  removeFavorite: null,
  loadingRemFav: false,
  errorRemFav: null,
};

// Favorites list
const fetchFavsListStart = (state) => ({
  ...state,
  loadingFavList: true,
  errorFavList: null,
});

const fetchFavsListSuccess = (state, action) => ({
  ...state,
  favoritesList: action.favList,
  loadingFavList: false,
  errorFavList: null,
});

const fetchFavsListFail = (state, action) => ({
  ...state,
  errorFavList: action.error,
  loadingFavList: false,
});

// Favorites movies
const fetchFavsStart = (state) => ({
  ...state,
  loadingFavs: true,
  errorFavs: null,
});

const fetchFavsSuccess = (state, action) => ({
  ...state,
  favorites: action.favs,
  loadingFavs: false,
  errorFavs: null,
});

const fetchFavsFail = (state, action) => ({
  ...state,
  errorFavs: action.error,
  loadingFavs: false,
});

// Add favorite
const addFavStart = (state) => ({
  ...state,
  loadingAddFav: true,
  errorAddFav: null,
});

const addFavSuccess = (state, action) => ({
  ...state,
  addFavorite: action.added,
  loadingAddFav: false,
  errorAddFav: null,
});

const addFavFail = (state, action) => ({
  ...state,
  errorAddFav: action.error,
  loadingAddFav: false,
});

// Remove favorite
const removeFavStart = (state) => ({
  ...state,
  loadingRemFav: true,
  errorRemFav: null,
});

const removeFavSuccess = (state, action) => ({
  ...state,
  removeFavorite: action.removed,
  loadingRemFav: false,
  errorRemFav: null,
});

const removeFavFail = (state, action) => ({
  ...state,
  errorRemFav: action.error,
  loadingRemFav: false,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    // Favorites List
    case FETCH_FAVORITELIST_START:
      return fetchFavsListStart(state);

    case FETCH_FAVORITELIST_SUCCESS:
      return fetchFavsListSuccess(state, action);

    case FETCH_FAVORITELIST_FAIL:
      return fetchFavsListFail(state, action);

    // Favorites movies
    case FETCH_FAVORITES_START:
      return fetchFavsStart(state);

    case FETCH_FAVORITES_SUCCESS:
      return fetchFavsSuccess(state, action);

    case FETCH_FAVORITES_FAIL:
      return fetchFavsFail(state, action);

    // Add favorite
    case ADD_FAVORITE_START:
      return addFavStart(state);

    case ADD_FAVORITE_SUCCESS:
      return addFavSuccess(state, action);

    case ADD_FAVORITE_FAIL:
      return addFavFail(state, action);

    // Remove favorite
    case REMOVE_FAVORITE_START:
      return removeFavStart(state);

    case REMOVE_FAVORITE_SUCCESS:
      return removeFavSuccess(state, action);

    case REMOVE_FAVORITE_FAIL:
      return removeFavFail(state, action);

    default:
      return state;
  }
};

export default reducer;
