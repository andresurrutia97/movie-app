import PropTypes from 'prop-types';

export const moviesShape = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
};

export const movieInfoShape = {
  id: PropTypes.number,
  release_date: PropTypes.string,
  production_countries: PropTypes.array,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.array,
  runtime: PropTypes.number,
  overview: PropTypes.string,
  images: PropTypes.object,
  videos: PropTypes.object,
};

export const userInfoShape = {
  name: PropTypes.string,
  img: PropTypes.string,
  tel: PropTypes.string,
  desc: PropTypes.string,
};

export const errorShape = {
  message: PropTypes.string,
};

export const historyShape = {
  movieId: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({ movieId: PropTypes.number }),
    }),
  }),
};
