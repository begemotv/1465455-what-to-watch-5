import React, {PureComponent} from "react";

const MOVIES_ON_MORE_BUTTON_CLICK_COUNT = 8;
const MOVIES_SHOWN_ON_START_COUNT = 8;

const withShowMoreButtonCount = (Component) => {
  class WithShowMoreButtonCount extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        moviesShownOverall: MOVIES_SHOWN_ON_START_COUNT
      };

      this.handleShowMoreButton = this._handleShowMoreButton.bind(this);
    }

    _handleShowMoreButton() {
      this.setState((prevState) => {
        return {
          moviesShownOverall: prevState.moviesShownOverall + MOVIES_ON_MORE_BUTTON_CLICK_COUNT
        };
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onShowMoreButtonClick={this.handleShowMoreButton}
          moviesShownOverall={this.state.moviesShownOverall}
        />
      );
    }
  }
  return WithShowMoreButtonCount;
};

export default withShowMoreButtonCount;
