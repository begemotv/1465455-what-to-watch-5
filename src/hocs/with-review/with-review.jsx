import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {postFilmReview} from "../../store/api-actions/api-actions";
import {changeReviewFormStatus} from "../../store/action";
import {convertRatingStarsToNumber} from "../../utils";
import {ReviewLength} from "../../const";

const RATING_STARS_COUNT_DEFAULT = `2`;
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
      const {isReviewFormBlocked} = this.props;

      return (
        <Component
          onFormSubmit={this.handleReviewAdd}
          onRatingChange={this.handleRatingChange}
          onCommentChange={this.handleCommentChange}
          comment={comment}
          isReviewValid={isReviewValid}
          isReviewFormBlocked={isReviewFormBlocked}
          ratingStars={ratingStars}
          {...this.props}
        />
      );
    }
  }

  WithReview.propTypes = {
    id: PropTypes.number.isRequired,
    isReviewFormBlocked: PropTypes.bool.isRequired,
    onReviewAdd: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    activeFilmReviews: DATA.activeFilmReviews,
    isReviewFormBlocked: DATA.isReviewFormBlocked,

  });

  const mapDispatchToProps = (dispatch) => ({
    onReviewAdd(id, comment, rating) {
      dispatch(changeReviewFormStatus(true));
      dispatch(postFilmReview(id, comment, rating));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReview);
};

export default withReview;
