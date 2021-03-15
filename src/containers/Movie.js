import React from 'react';

import { useDispatch, useSelector } from '../utils/reduxHooks';
import MovieView from '../views/Movie';
import { fetchMovieInfo } from '../store/actions/MovieActions';
import {
  addFavorite,
  removeFavorite,
  fetchFavoriteList,
} from '../store/actions/FavoritesActions';
import { addSeen, fetchSeenList } from '../store/actions/SeenMoviesActions';
import { historyShape } from '../utils/propTypes';

const Movie = ({ history }) => {
  const { movieInfo, loading, error, favoritesList, seenList } = useSelector(
    (state) => ({
      movieInfo: state.movie.movieInfo,
      loading: state.movie.loading,
      error: state.movie.error,
      favoritesList: state.favorites.favoritesList,
      seenList: state.seen.seenList,
    })
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    const id = history.location.pathname.split('/')[2];
    dispatch(fetchMovieInfo(id));
    dispatch(fetchFavoriteList());
    dispatch(fetchSeenList());
  }, [dispatch, history]);

  /**
   * handleAddFavorite() dispatch de addFavorite action to add a new movie
   * to favorites
   */
  const handleAddFavorite = (id) => {
    dispatch(addFavorite(id));
  };

  /**
   * handleRemoveFavorite() dispatch de removeFavorite action to add a new movie
   * to favorites
   */
  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  /**
   * handleAddFavorite() dispatch de addFavorite action to add a new movie
   * to favorites
   */
  const handleAddSeen = (id) => {
    dispatch(addSeen(id));
  };

  return (
    <MovieView
      movieInfo={movieInfo}
      loading={loading}
      error={error}
      favList={favoritesList}
      addFav={handleAddFavorite}
      removeFav={handleRemoveFavorite}
      seenList={seenList}
      addSeen={handleAddSeen}
    />
  );
};

Movie.propTypes = {
  history: historyShape.movieId.isRequired,
};

export default Movie;
