import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {children, onMouseEnter, onMouseLeave} = props;

  return (
    <div
      className="small-movie-card__image"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

VideoPlayer.propTypes = {
  children: PropTypes.node.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default VideoPlayer;

