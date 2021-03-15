import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';
import SliderContext from './Context';
import ShowDetailsButton from './ShowDetailsButton';
import Mark from './Mark';
import { getImageUrl } from '../../../utils/urls';

const Item = ({ movie }) => {
  const bgImg = getImageUrl(movie.poster_path);

  return (
    <SliderContext.Consumer>
      {({ onSelectSlide, currentSlide, elementRef }) => {
        const isActive = currentSlide && currentSlide.id === movie.id;

        return (
          <div ref={elementRef} className="slider-item">
            <img className="slider-item__img" src={bgImg} alt="" />
            <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
            {isActive && <Mark />}
          </div>
        );
      }}
    </SliderContext.Consumer>
  );
};

Item.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default Item;
