import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const RATING_STARS_COUNT = 5;

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        ratingStars: RATING_STARS_COUNT,
        text: ``
      };

      this.handleRatingChange = this._handleRatingChange.bind(this);
      this.handleTextChange = this._handleTextChange.bind(this);
      this.handleCommentAdd = this._handleCommentAdd.bind(this);
    }

    _handleRatingChange(evt) {
      const value = evt.target.value;
      this.setState(() => ({
        ratingStars: value
      }));
    }

    _handleTextChange(evt) {
      const value = evt.target.value;
      this.setState(() => ({
        text: value
      }));
    }

    _handleCommentAdd(evt) {
      evt.preventDefault();
      const {onCommentAdd} = this.props;
      const {ratingStars, text} = this.state;
      onCommentAdd(text, ratingStars);
    }

    render() {
      return (
        <Component
          onFormSubmit={this.handleCommentAdd}
          onRatingChange={this.handleRatingChange}
          onTextChange={this.handleTextChange}
          text={this.state.text}
        />
      );
    }
  }

  WithComment.propTypes = {
    onCommentAdd: PropTypes.func.isRequired
  };

  return WithComment;
};

export default withComment;
