import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {convertRatingStarsToNumber} from "../../utils";
import {ReviewLength} from "../../const";

const RATING_STARS_COUNT_DEFAULT = `5`;
const {MIN, MAX} = ReviewLength;

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: null,
        ratingStars: RATING_STARS_COUNT_DEFAULT,
        isReviewValid: false,
      };

      this.handleRatingChange = this._handleRatingChange.bind(this);
      this.handleCommentChange = this._handleCommentChange.bind(this);
      this.handleReviewAdd = this._handleReviewAdd.bind(this);
    }

    _handleRatingChange(evt) {
      const value = evt.target.value;
      this.setState(() => ({
        ratingStars: value,
        rating: convertRatingStarsToNumber(+value)
      }));
      this._handleValidationCheck();
    }

    _handleCommentChange(evt) {
      const value = evt.target.value;
      this.setState(() => ({
        comment: value
      }));
      this._handleValidationCheck();
    }

    _handleReviewAdd(evt) {
      evt.preventDefault();
      const {id, onReviewAdd} = this.props;
      const {rating, comment} = this.state;
      onReviewAdd(id, comment, rating);
    }

    _handleValidationCheck() {
      const {comment, rating} = this.state;
      if ((comment.length > MIN && comment.length < MAX) && rating) {
        this.setState(() => ({
          isReviewValid: true
        }));
      } else {
        this.setState(() => ({
          isReviewValid: false
        }));
      }
    }

    render() {
      const {comment, isReviewValid, ratingStars} = this.state;

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
