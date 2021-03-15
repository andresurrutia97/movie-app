import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="h-full shadow-md">
      <ReactPlayer url={url} width="100%" height="100%" controls playing />
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;
