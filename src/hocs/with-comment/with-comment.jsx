import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {postFilmReview} from "../../store/api-actions/api-actions";
import {convertRatingStarsToNumber} from "../../utils";

const RATING_STARS_COUNT = 5;

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: null,
        ratingStars: RATING_STARS_COUNT,
        isDisabled: true,
        isFormBlocked: false,
      };

      this.handleRatingChange = this._handleRatingChange.bind(this);
      this.handleCommentChange = this._handleCommentChange.bind(this);
      this.handleReviewAdd = this._handleReviewAdd.bind(this);
    }

    _handleRatingChange(evt) {
      const value = evt.target.value;
      this.setState(() => ({
        ratingStars: value,
        rating: convertRatingStarsToNumber(value)
      }));
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
      this.setState(() => ({
        isDisabled: true
      }));
    }

    _handleValidationCheck() {
      if (this.state.comment.length < 50 && this.state.comment.length > 400) {
        this.setState(() => ({
          isDisabled: true
        }));
      } else {
        this.setState(() => ({
          isDisabled: false
        }));
      }
    }

    render() {
      return (
        <Component
          onFormSubmit={this.handleReviewAdd}
          onRatingChange={this.handleRatingChange}
          onCommentChange={this.handleCommentChange}
          comment={this.state.comment}
          isDisabled={this.state.isDisabled}
          {...this.props}
        />
      );
    }
  }

  WithComment.propTypes = {
    id: PropTypes.number.isRequired,
    onReviewAdd: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    activeFilmReviews: DATA.activeFilmReviews,
  });

  const mapDispatchToProps = (dispatch) => ({
    onReviewAdd(id, comment, rating) {
      dispatch(postFilmReview(id, comment, rating));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithComment);
};

export default withComment;

// {
//   "rating": 8,
//   "comment": "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years."
// }
