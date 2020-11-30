import React, {useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import {createBrowserHistory} from 'history';
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import {getFilm} from "../../store/selectors";
import {getTimeElapsed} from "../../utils";

const PlayerScreen = (props) => {
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(``);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.oncanplaythrough = () => {
      setIsPlaying(true);
      video.play();
    };

    video.onplay = () => {
      setIsPlaying(true);
    };

    video.onpause = () => {
      setIsPlaying(false);
    };

    video.ontimeupdate = () => {
      handleTimeElapsed();
    };

    return () => {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
    };
  }, []);

  const handleTimeElapsed = () => {
    const video = videoRef.current;
    setDuration(Math.floor(video.duration));
    setProgress(Math.floor(video.currentTime));
    setTimeElapsed(getTimeElapsed(Math.floor(video.duration), Math.floor(video.currentTime)));
  };

  const handleScreenModeChange = () => {
    const video = videoRef.current;
    video.requestFullscreen();
  };

  const handleVideoStatusChange = () => {
    const video = videoRef.current;
    if (!isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const {
    film: {
      name,
      previewImg,
      videoSrc
    },
  } = props;

  let history = createBrowserHistory();

  return (
    <div className="player">
      <video
        className="player__video"
        ref={videoRef}
        src={videoSrc}
        poster={previewImg}
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
              max={duration}
            >
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
            onClick={handleVideoStatusChange}
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
            onClick={handleScreenModeChange}
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
  film: PropTypes.shape(filmPropTypes).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  const idInteger = Number.parseInt(id, 10);
  return ({
    film: getFilm(state, idInteger),
  });
};

export {PlayerScreen};
export default connect(mapStateToProps)(PlayerScreen);
