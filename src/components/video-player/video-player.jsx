import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";

const DELAY_FOR_VIDEO = 1000;

const VideoPlayer = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.oncanplaythrough = () => {
      setTimeout(()=>{
        video.play();
      }, DELAY_FOR_VIDEO);
    };

    return () => {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
    };
  }, []);

  const {
    isCardPreview,
    previewImg,
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
  videoSrc: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired
};

export default VideoPlayer;
