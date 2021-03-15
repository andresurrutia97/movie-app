import React from 'react';
import PropTypes from 'prop-types';

const ImageCard = ({ imgUrl }) => (
  <div
    className="custom-poster-card rounded-lg shadow-lg"
    style={{ backgroundImage: `url('${imgUrl}')` }}
  />
);

ImageCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default ImageCard;
