import React, {createRef, PureComponent} from "react";

const ON_MOUSE_OVER_DELAY = 1000;

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
    }

    componentDidMount() {
      const video = this._videoRef.current;
      video.oncanplaythrough = () => {
        setTimeout(()=>{
          video.play();
        }, ON_MOUSE_OVER_DELAY);
      };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.oncanplaythrough = null;
    }

    render() {
      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
        />
      );
    }
  }

  return WithVideo;
};

export default withVideo;
