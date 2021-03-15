import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import { getImageUrl } from '../../../utils/urls';

const ImgBackground = ({ img }) => {
  const bgImg = img ? (
    <img className="w-full latest-movie__img" src={getImageUrl(img)} alt="" />
  ) : (
    ''
  );

  return <>{bgImg}</>;
};

ImgBackground.propTypes = {
  img: PropTypes.string,
};

ImgBackground.defaultProps = {
  img: '',
};

export default ImgBackground;
