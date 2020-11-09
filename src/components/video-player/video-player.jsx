import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {
    isCardPreview,
    previewImg,
    videoRef,
    videoSrc
  } = props;

  return (
    <video
      className="player__video"
      ref={videoRef}
      src={videoSrc}
      poster={previewImg}
      loop={isCardPreview}
      muted={isCardPreview}
    />
  );
};

VideoPlayer.propTypes = {
  isCardPreview: PropTypes.bool.isRequired,
  videoRef: PropTypes.object.isRequired,
  videoSrc: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired
};

export default VideoPlayer;
