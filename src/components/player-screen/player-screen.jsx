import React, {useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import {createBrowserHistory} from 'history';
import {connect} from "react-redux";
import {toast} from "react-toastify";

import ErrorPopup from "../error-popup/error-popup";
import {filmPropTypes} from "../../prop-types";
import {getFilm} from "../../store/selectors";
import {getTimeElapsed} from "../../utils";
import {ErrorMessage} from "../../const";

const PlayerScreen = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef(null);
  const videoTogglerRef = useRef(null);
  const videoProgressRef = useRef(null);
  const videoElapsedTimeRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const checker = setTimeout(() => {
      if (video.duration === 0 || isNaN(video.duration)) {
        toast.error(ErrorMessage.PROBLEM_WITH_SOURCE);
      }
    }, 5000);

    video.oncanplay = () => {
      setIsLoaded(true);
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
      if (video.currentTime !== 0) {
        handleTimeElapsed();
        handleProgress();
      }
    };

    return () => {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      clearTimeout(checker);
    };
  }, []);

  const handleTimeElapsed = () => {
    const timeElapsed = videoElapsedTimeRef.current;
    const video = videoRef.current;
    const currentTime = Math.floor(video.currentTime);
    const duration = Math.floor(video.duration);
    timeElapsed.textContent = getTimeElapsed(duration, currentTime);
  };

  const handleProgress = () => {
    const video = videoRef.current;
    const progress = videoProgressRef.current;
    const toggler = videoTogglerRef.current;
    const currentTime = Math.floor(video.currentTime);
    const duration = Math.floor(video.duration);
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;
    toggler.style.left = `${progressPercent}%`;
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
              value="0"
              max="100"
              ref={videoProgressRef}
            >
            </progress>
            <div
              className="player__toggler"
              style={{left: `0%`}}
              ref={videoTogglerRef}>Toggler</div>
          </div>
          <div
            className="player__time-value"
            ref={videoElapsedTimeRef}
          >--:--:--</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handleVideoStatusChange}
            disabled={!isLoaded}
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
      <ErrorPopup />
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
