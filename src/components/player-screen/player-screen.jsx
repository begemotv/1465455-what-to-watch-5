import React from "react";
import PropTypes from 'prop-types';
import {createBrowserHistory} from 'history';
import {connect} from "react-redux";

import VideoPlayer from "../video-player/video-player";
import {filmPropTypes} from "../../prop-types";
import {getFilm} from "../../store/selectors";

const PlayerScreen = (props) => {
  const {
    film: {
      name,
      previewImg,
      videoSrc
    },
    duration,
    isPlaying,
    onVideoStatusChange,
    onScreenModeChange,
    progress,
    timeElapsed
  } = props;

  let history = createBrowserHistory();

  return (
    <div className="player">
      <VideoPlayer
        {...props}
        isCardPreview={false}
        previewImg={previewImg}
        videoSrc={videoSrc}
      />

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          history.goBack();
        }}
      >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progress}
              max={duration}>
            </progress>
            <div
              className="player__toggler"
              style={{left: `${(progress / duration) * 100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsed}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onVideoStatusChange}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onScreenModeChange}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  duration: PropTypes.number.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onVideoStatusChange: PropTypes.func.isRequired,
  onScreenModeChange: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  timeElapsed: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  const idInteger = parseInt(id, 10);
  return ({
    film: getFilm(state, idInteger),
  });
};

export default connect(mapStateToProps)(PlayerScreen);
