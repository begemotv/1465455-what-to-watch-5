import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {postFilmReview} from "../../store/api-actions/api-actions";
import {changeReviewFormStatus} from "../../store/action";

const RATING_STARS = [`1`, `2`, `3`, `4`, `5`];
const WHITE_TRANSPARENT_BACKGROUND = `rgba(255,255,255, 0.3)`;

const AddReview = (props) => {
  const {
    comment,
    isReviewFormBlocked,
    isReviewValid,
    onCommentChange,
    onFormSubmit,
    onRatingChange,
    ratingStars,
  } = props;

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt) => onFormSubmit(evt)}
      >
        <div className="rating">
          <div className="rating__stars">
            {RATING_STARS.map((star) => (
              <React.Fragment key={`star-${star}`}>
                <input
                  className="rating__input"
                  id={`star-${star}`}
                  type="radio"
                  name="rating"
                  value={star}
                  onChange={(evt) => onRatingChange(evt)}
                  checked={ratingStars === star}
                  disabled={isReviewFormBlocked}
                />
                <label className="rating__label" htmlFor={`star-${star}`}>{`Rating ${star} stars`}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div
          className="add-review__text"
          style={{backgroundColor: WHITE_TRANSPARENT_BACKGROUND}}
        >
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Please write in the range from 50 to 400 characters"
            onChange={(evt) => onCommentChange(evt)}
            value={comment}
            disabled={isReviewFormBlocked}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!isReviewValid || isReviewFormBlocked}
            >Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddReview.propTypes = {
  comment: PropTypes.string.isRequired,
  isReviewFormBlocked: PropTypes.bool.isRequired,
  isReviewValid: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  ratingStars: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  isReviewFormBlocked: DATA.isReviewFormBlocked,
});

const mapDispatchToProps = (dispatch) => ({
  onReviewAdd(id, comment, rating) {
    dispatch(changeReviewFormStatus(true));
    dispatch(postFilmReview(id, comment, rating));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
