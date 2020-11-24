import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {convertRatingStarsToNumber} from "../../utils";
import {ReviewLength} from "../../const";

const {MIN, MAX} = ReviewLength;

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: null,
        ratingStars: ``,
      };

      this.handleRatingChange = this._handleRatingChange.bind(this);
      this.handleCommentChange = this._handleCommentChange.bind(this);
      this.handleReviewAdd = this._handleReviewAdd.bind(this);
    }

    _handleRatingChange(evt) {
      const value = evt.target.value;
      const valueInteger = parseInt(value, 10);
      this.setState(() => ({
        ratingStars: value,
        rating: convertRatingStarsToNumber(valueInteger)
      }));
    }

    _handleCommentChange(evt) {
      const value = evt.target.value;
      this.setState(() => ({
        comment: value
      }));
    }

    _handleReviewAdd(evt) {
      evt.preventDefault();
      const {id, onReviewAdd} = this.props;
      const {rating, comment} = this.state;
      onReviewAdd(id, comment, rating);
    }

    render() {
      const {comment, ratingStars} = this.state;
      const isReviewValid = (comment.length > MIN && comment.length < MAX) && ratingStars;

      return (
        <Component
          onFormSubmit={this.handleReviewAdd}
          onRatingChange={this.handleRatingChange}
          onCommentChange={this.handleCommentChange}
          comment={comment}
          isReviewValid={isReviewValid}
          ratingStars={ratingStars}
        />
      );
    }
  }

  WithReview.propTypes = {
    id: PropTypes.number.isRequired,
    onReviewAdd: PropTypes.func.isRequired,
  };

  return WithReview;
};

export default withReview;
