import { useRef, useEffect, useState } from 'react';

const useSliding = (elementWidth, countElements) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);

  // Padding from the x axis of the carousel
  const PADDINGS = 152;

  useEffect(() => {
    const contWidth = containerRef.current.clientWidth - PADDINGS;

    setContainerWidth(contWidth);
    setTotalInViewport(Math.floor(containerWidth / elementWidth));
  }, [containerWidth, elementWidth]);

  /**
   * handlePrev() set the distance the carousel should
   * move to the right
   */
  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  /**
   * handlePrev() set the distance the carousel should
   * move to the left
   */
  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
