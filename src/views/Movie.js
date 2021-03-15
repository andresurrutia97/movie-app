import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../components/Ui/VideoPlayer';
import InfoMovie from '../components/Movie/InfoMovie';
import ImageCarousel from '../components/Ui/ImageCarousel';
import ImageCard from '../components/Ui/ImageCard';
import Spinner from '../components/Ui/Spinner';
import Error from '../components/Ui/Error';
import { getImageUrl, getTrailerUrl } from '../utils/urls';
import { movieInfoShape, errorShape } from '../utils/propTypes';

const Movie = ({
  movieInfo,
  loading,
  error,
  favList,
  addFav,
  removeFav,
  seenList,
  addSeen,
}) => {
  let movie = <Spinner />;

  React.useEffect(() => {
    if (movieInfo) {
      const isSeen = seenList
        ? Object.keys(seenList).includes(movieInfo.id.toString())
        : false;
      if (!isSeen) addSeen(movieInfo.id);
    }
  }, [movieInfo]);

  if (movieInfo && !loading) {
    const trailerUrl = getTrailerUrl(movieInfo?.videos);
    const isFav = favList
      ? Object.keys(favList).includes(movieInfo.id.toString())
      : false;

    movie = (
      <div className="w-full movie">
        <VideoPlayer url={trailerUrl} />
        <InfoMovie
          data={movieInfo}
          isFav={isFav}
          addFav={addFav}
          removeFav={removeFav}
        />
        {movieInfo.images ? (
          <div className="pl-5 md:pl-20">
            <ImageCarousel>
              {movieInfo.images.backdrops.map((poster) => (
                <ImageCard
                  key={poster.file_path}
                  imgUrl={getImageUrl(poster.file_path)}
                />
              ))}
            </ImageCarousel>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  } else if (error) {
    movie = <Error />;
  }

  return <>{movie}</>;
};

Movie.propTypes = {
  movieInfo: PropTypes.shape(movieInfoShape),
  loading: PropTypes.bool,
  error: PropTypes.shape(errorShape),
  favList: PropTypes.shape({
    id: PropTypes.number,
  }),
  addFav: PropTypes.func,
  removeFav: PropTypes.func,
  seenList: PropTypes.shape({
    id: PropTypes.number,
  }),
  addSeen: PropTypes.func,
};

Movie.defaultProps = {
  movieInfo: null,
  loading: false,
  error: null,
  favList: null,
  addFav: () => {},
  removeFav: () => {},
  seenList: null,
  addSeen: () => {},
};

export default Movie;
