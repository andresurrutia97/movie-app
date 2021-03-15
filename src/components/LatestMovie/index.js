import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import LatestMovieContent from './LatestMovieContent';
import Button from '../Ui/Button';
import Title from '../Ui/MovieTitle';
import MovieGenres from '../Ui/MovieGenres';
import Runtime from '../Ui/MovieRuntime';
import Overview from '../Ui/MovieOverview';
import ImgBackground from './Background';
import Shadow from './Shadow';
import { goToMovie } from '../../utils/navigation';

const LatestMovie = ({ movie, history }) => {
  return (
    <div className="w-full relative">
      <ImgBackground img={movie.backdrop_path} />
      <Shadow />
      <LatestMovieContent>
        <div className="flex flex-col items-center md:w-full md:items-start">
          <Title title={movie.title} />
          <MovieGenres genres={movie.genres} />
          <Runtime runtime={movie.runtime} />
          <Overview overview={movie.overview} />
        </div>
        <div className="mt-1 w-24 md:mt-12 md:w-64">
          <Button onClick={() => goToMovie(history, movie.id)}>Watch</Button>
        </div>
      </LatestMovieContent>
    </div>
  );
};

LatestMovie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
  history: PropTypes.any.isRequired,
};

export default withRouter(LatestMovie);
