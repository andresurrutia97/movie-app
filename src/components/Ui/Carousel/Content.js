import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Content.css';
import { getImageUrl } from '../../../utils/urls';
import { goToMovie } from '../../../utils/navigation';
import Button from '../Button';

const Content = ({ movie, onClose, history }) => {
  const bgImg = getImageUrl(movie.backdrop_path);

  return (
    <div className="slider-content">
      <div className="slider-content__background">
        <div className="slider-content__background__shadow" />
        <div
          className="slider-content__background__image"
          style={{
            backgroundImage: `url('${bgImg}')`,
          }}
        />
      </div>
      <div className="slider-content__area">
        <div className="slider-content__area__container">
          <div className="slider-content__title">{movie.title}</div>
          <div className="slider-content__description line-clamp">
            <p>{movie.overview}</p>
          </div>
          <div className="w-full md:w-64 mt-12">
            <Button onClick={() => goToMovie(history, movie.id)}>Watch</Button>
          </div>
        </div>
        <button
          type="button"
          className="slider-content__close"
          onClick={onClose}
        >
          <span className="material-icons">clear</span>
        </button>
      </div>
    </div>
  );
};

Content.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
};

export default withRouter(Content);
