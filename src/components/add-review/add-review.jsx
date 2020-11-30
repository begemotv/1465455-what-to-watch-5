import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {postFilmReview} from "../../store/api-actions/api-actions";
import {changeReviewFormStatus} from "../../store/action";
import {convertRatingStarsToNumber} from "../../utils";
import {ReviewLength} from "../../const";

const RATING_STARS = [`1`, `2`, `3`, `4`, `5`];
const WHITE_TRANSPARENT_BACKGROUND = `rgba(255,255,255, 0.3)`;
const {MIN, MAX} = ReviewLength;

const AddReview = (props) => {
  const [comment, setComment] = useState(``);
  const [ratingStars, setRatingStars] = useState(``);
  const [rating, setRating] = useState(null);

  const handleCommentChange = (evt) => {
    const value = evt.target.value;
    setComment(value);
  };

  const handleRatingChange = (evt) => {
    const value = evt.target.value;
    const valueInteger = Number.parseInt(value, 10);
    setRatingStars(value);
    setRating(convertRatingStarsToNumber(valueInteger));
  };

  const handleReviewAdd = (evt) => {
    evt.preventDefault();
    const {id, onReviewAdd} = props;
    onReviewAdd(id, comment, rating);
  };

  const isReviewValid = (comment.length > MIN && comment.length < MAX) && ratingStars;

  const {
    isReviewFormBlocked,
  } = props;

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt) => handleReviewAdd(evt)}
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
                  onChange={(evt) => handleRatingChange(evt)}
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
            onChange={(evt) => handleCommentChange(evt)}
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
  id: PropTypes.number.isRequired,
  isReviewFormBlocked: PropTypes.bool.isRequired,
  onReviewAdd: PropTypes.func.isRequired,
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
