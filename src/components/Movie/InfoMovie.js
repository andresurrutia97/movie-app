import React from 'react';
import PropTypes from 'prop-types';

import Details from './Details';
import MovieGenres from '../Ui/MovieGenres';
import Overview from './Overview';
import Title from './Title';
import FavoriteToggle from '../Ui/FavoriteToggle';
import { formatYear, formatCountry } from '../../utils/formatData';

const InfoMovie = ({ data, isFav, addFav, removeFav }) => {
  const year = formatYear(data?.release_date);
  const country = formatCountry(data?.production_countries);

  return (
    <div className="w-full flex flex-col items-center px-5 mb-5 md:w-full md:px-20 md:items-start">
      <div className="flex flex-col w-full mt-5 items-center md:flex-row md:justify-between md:items-center md:mt-6">
        <Title title={data.title} />
        <div className=" right-0 mt-1 md:mt-0">
          <FavoriteToggle
            isFav={isFav}
            add={addFav}
            remove={removeFav}
            movieId={data.id}
          />
        </div>
      </div>
      <MovieGenres genres={data.genres} />
      <div className="flex justify-around mb-2 md:justify-start">
        <Details title="Year" name={year} />
        <Details title="Country" name={country} />
        <Details title="Duration" name={`${data.runtime} min`} />
      </div>
      <div className="md:w-6/12">
        <Overview overview={data.overview} />
      </div>
    </div>
  );
};

InfoMovie.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    release_date: PropTypes.string,
    production_countries: PropTypes.array,
    title: PropTypes.string,
    genres: PropTypes.array,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
  isFav: PropTypes.bool,
  addFav: PropTypes.func,
  removeFav: PropTypes.func,
};

InfoMovie.defaultProps = {
  isFav: false,
  addFav: () => {},
  removeFav: () => {},
};

export default InfoMovie;
