import React from "react";
import PropTypes from "prop-types";

const RATING_STARS = [1, 2, 3, 4, 5];

const AddComment = (props) => {
  const {
    isDisabled,
    onFormSubmit,
    onRatingChange,
    onCommentChange,
    comment
  } = props;

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={onFormSubmit}
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
                  onChange={onRatingChange}
                />
                <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div
          className="add-review__text"
          style={{backgroundColor: `rgba(255,255,255, 0.3)`}}
        >
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Please write in the range from 50 to 400 characters"
            onChange={onCommentChange}
            value={comment}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isDisabled}
            >Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddComment.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
};

export default AddComment;
