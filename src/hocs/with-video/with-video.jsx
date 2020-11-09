import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

import {getTimeElapsed} from "../../utils";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        duration: 0,
        isLoading: true,
        isPlaying: false,
        isFullScreen: false,
        progress: 0,
        timeElapsed: ``,
      };

      this.handleScreenModeChange = this._handleScreenModeChange.bind(this);
      this.handleVideoStatusChange = this._handleVideoStatusChange.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;
      if (this.props.delay !== undefined) {
        video.oncanplaythrough = () => {
          setTimeout(()=>{
            video.play();
          }, this.props.delay);
        };
      } else {
        video.oncanplaythrough = () => {
          this.setState({
            isLoading: false,
            duration: Math.floor(video.duration),
          });
        };

        video.onplay = () => {
          this.setState({
            isPlaying: true,
          });
        };

        video.onpause = () => {
          this.setState({
            isPlaying: false,
          });
        };

        video.ontimeupdate = () => {
          this.setState({
            progress: Math.floor(video.currentTime),
            timeElapsed: getTimeElapsed(this.state.duration, this.state.progress),
          });
        };
      }
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
    }

    _handleScreenModeChange() {
      const {isFullScreen} = this.state;
      const video = this._videoRef.current;

      if (isFullScreen) {
        video.exitFullscreen();
      } else {
        video.requestFullscreen();
      }

      this.setState({
        isFullScreen: !isFullScreen,
      });
    }

    _handleVideoStatusChange() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          duration={this.state.duration}
          isLoading={this.state.isLoading}
          isPlaying={this.state.isPlaying}
          onVideoStatusChange={this.handleVideoStatusChange}
          onScreenModeChange={this.handleScreenModeChange}
          progress={this.state.progress}
          timeElapsed={this.state.timeElapsed}
          videoRef={this._videoRef}
        />
      );
    }
  }

  WithVideo.propTypes = {
    delay: PropTypes.number
  };

  return WithVideo;
};

export default withVideo;
