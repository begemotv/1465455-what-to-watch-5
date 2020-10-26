import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
    };

    this.handleVideoStart = this._handleVideoStart.bind(this);
    this.handleVideoStop = this._handleVideoStop.bind(this);
  }

  _handleVideoStart() {
    const video = this._videoRef.current;
    this.filmTimerId = setTimeout(() => {
      video.play();
    }, 1000);
  }

  _handleVideoStop() {
    const video = this._videoRef.current;
    if (this.filmTimerId) {
      clearTimeout(this.filmTimerId);
    }
    video.load();
  }


  render() {
    const {previewImg, videoSrc} = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={() => this.handleVideoStart()}
        onMouseLeave={() => this.handleVideoStop()}
      >
        <video
          className="small-movie-card__image"
          ref={this._videoRef}
          src={videoSrc}
          poster={previewImg}
          muted
          loop
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  previewImg: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
};
