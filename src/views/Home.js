import React from 'react';
import PropTypes from 'prop-types';

import Carousel from '../components/Ui/Carousel';
import LatestMovie from '../components/LatestMovie';
import Spinner from '../components/Ui/Spinner';
import Error from '../components/Ui/Error';
import { moviesShape, movieInfoShape, errorShape } from '../utils/propTypes';

const Home = ({
  popularMovies,
  loadingPopularMovies,
  errorPopular,
  topRatedMovies,
  loadingTopRatedMovies,
  errorTopRated,
  latestMovie,
  errorLatest,
  loadingLatestMovie,
  favorites,
  loadingFavs,
  errorFavs,
  seen,
  loadingSeen,
  errorSeen,
}) => {
  let latestMovieInfo = <Spinner />;
  let popularList = <Spinner />;
  let topRatedList = <Spinner />;
  let favoritesMovies = null;
  let seenMovies = null;

  if (latestMovie && !loadingPopularMovies) {
    latestMovieInfo = <LatestMovie movie={latestMovie} />;
  } else if (errorLatest) {
    latestMovieInfo = <Error />;
  }

  if (popularMovies && !loadingTopRatedMovies) {
    popularList = (
      <Carousel title="Popular">
        {popularMovies.map((movie) => (
          <Carousel.Item movie={movie} key={movie.id} />
        ))}
      </Carousel>
    );
  } else if (errorPopular) {
    popularList = <Error />;
  }

  if (topRatedMovies && !loadingLatestMovie) {
    topRatedList = (
      <Carousel title="Top Rated">
        {topRatedMovies.map((movie) => (
          <Carousel.Item movie={movie} key={movie.id} />
        ))}
      </Carousel>
    );
  } else if (errorTopRated) {
    topRatedList = <Error />;
  }

  if (favorites && !loadingFavs) {
    favoritesMovies = (
      <Carousel title="Favorites">
        {favorites.map((movie) => (
          <Carousel.Item movie={movie} key={movie.id} />
        ))}
      </Carousel>
    );
  } else if (errorFavs) {
    favoritesMovies = <Error />;
  }

  if (seen && !loadingSeen) {
    seenMovies = (
      <Carousel title="Seen">
        {seen.map((movie) => (
          <Carousel.Item movie={movie} key={movie.id} />
        ))}
      </Carousel>
    );
  } else if (errorSeen) {
    seenMovies = <Error />;
  }

  return (
    <>
      {latestMovieInfo}
      {favoritesMovies}
      {seenMovies}
      {popularList}
      {topRatedList}
    </>
  );
};

Home.propTypes = {
  popularMovies: PropTypes.arrayOf(PropTypes.shape(moviesShape)),
  topRatedMovies: PropTypes.arrayOf(PropTypes.shape(moviesShape)),
  favorites: PropTypes.arrayOf(PropTypes.shape(moviesShape)),
  seen: PropTypes.arrayOf(PropTypes.shape(moviesShape)),
  latestMovie: PropTypes.shape(movieInfoShape),
  errorLatest: PropTypes.shape(errorShape),
  errorPopular: PropTypes.shape(errorShape),
  errorTopRated: PropTypes.shape(errorShape),
  errorFavs: PropTypes.shape(errorShape),
  errorSeen: PropTypes.shape(errorShape),
  loadingPopularMovies: PropTypes.bool,
  loadingTopRatedMovies: PropTypes.bool,
  loadingLatestMovie: PropTypes.bool,
  loadingFavs: PropTypes.bool,
  loadingSeen: PropTypes.bool,
};

Home.defaultProps = {
  popularMovies: null,
  topRatedMovies: null,
  favorites: null,
  seen: null,
  latestMovie: null,
  errorLatest: null,
  errorPopular: null,
  errorTopRated: null,
  errorFavs: null,
  errorSeen: null,
  loadingPopularMovies: false,
  loadingTopRatedMovies: false,
  loadingLatestMovie: false,
  loadingFavs: false,
  loadingSeen: false,
};

export default Home;
