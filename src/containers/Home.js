import React from 'react';
import { useDispatch, useSelector } from '../utils/reduxHooks';

import HomeView from '../views/Home';
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
} from '../store/actions/MoviesActions';
import { fetchFavoritesListIfNeeded } from '../store/actions/FavoritesActions';
import { fetchSeenListIfNeeded } from '../store/actions/SeenMoviesActions';

const Home = () => {
  const {
    popularMovies,
    loadingPopularMovies,
    errorPopularMovies,
    topRatedMovies,
    loadingTopRatedMovies,
    errorTopRatedMovies,
    latestMovie,
    loadingLatestMovie,
    errorLatestMovie,
    loadingFavList,
    errorFavList,
    favorites,
    loadingFavs,
    errorFavs,
    seen,
    loadingSeen,
    errorSeen,
  } = useSelector((state) => ({
    popularMovies: state.movies.popularMovies,
    loadingPopularMovies: state.movies.loadingPopularMovies,
    errorPopularMovies: state.movies.errorPopularMovies,
    topRatedMovies: state.movies.topRatedMovies,
    loadingTopRatedMovies: state.movies.loadingTopRatedMovies,
    errorTopRatedMovies: state.movies.errorTopRatedMovies,
    latestMovie: state.movies.latestMovie,
    loadingLatestMovie: state.movies.loadingLatestMovie,
    errorLatestMovie: state.movies.errorLatestMovie,
    loadingFavList: state.favorites.loadingFavList,
    errorFavList: state.favorites.errorFavList,
    favorites: state.favorites.favorites,
    loadingFavs: state.favorites.loadingFavs,
    errorFavs: state.favorites.errorFavs,
    seen: state.seen.seen,
    loadingSeen: state.seen.loadingSeen,
    errorSeen: state.seen.errorSeen,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchFavoritesListIfNeeded());
    dispatch(fetchSeenListIfNeeded());
  }, [dispatch]);

  return (
    <HomeView
      popularMovies={popularMovies}
      loadingPopularMovies={loadingPopularMovies}
      errorPopular={errorPopularMovies}
      topRatedMovies={topRatedMovies}
      loadingTopRatedMovies={loadingTopRatedMovies}
      errorTopRated={errorTopRatedMovies}
      latestMovie={latestMovie}
      loadingLatestMovie={loadingLatestMovie}
      errorLatest={errorLatestMovie}
      loadingFavList={loadingFavList}
      errorFavList={errorFavList}
      favorites={favorites}
      loadingFavs={loadingFavs}
      errorFavs={errorFavs}
      seen={seen}
      loadingSeen={loadingSeen}
      errorSeen={errorSeen}
    />
  );
};

export default Home;
