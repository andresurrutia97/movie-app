import React from 'react';
import PropTypes from 'prop-types';

const ImageCarousel = ({ title, children }) => {
  return (
    <div className="my-4">
      <div className="text-xl text-white">{title}</div>
      <div className="flex overflow-x-auto custom-scrollbar overflow-y-hidden">
        <div className="flex py-5 ">{children}</div>
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

ImageCarousel.defaultProps = {
  children: null,
  title: '',
};

export default ImageCarousel;
