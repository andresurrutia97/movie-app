import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Carousel.css';
import useSliding from './useSliding';
import useSizeElement from './useSizeElement';
import SliderContext from './Context';
import SliderWrapper from './SliderWrapper';
import SlideButton from './SlideButton';
import Content from './Content';

const Carousel = ({ children, title }) => {
  const [currentSlide, setCurrentSlide] = useState(null);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSliding(width, React.Children.count(children));

  /**
   * handleSelect() set the current slide to the
   * one that was selected by de user
   */
  const handleSelect = (movie) => {
    setCurrentSlide(movie);
  };

  /**
   * handleClose() set the current slide to null
   */
  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  let slider = ['slider'];
  if (currentSlide != null) {
    slider = [...slider, 'slider--open'];
  }
  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div className="slider-title">{title}</div>
        <div className={slider}>
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

Carousel.defaultProps = {
  children: null,
  title: '',
};

export default Carousel;
