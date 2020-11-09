import React from "react";
import PropTypes from "prop-types";

const RATING_STARS = [1, 2, 3, 4, 5];

const AddComment = (props) => {
  const {
    onFormSubmit,
    onRatingChange,
    onTextChange,
    text
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

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={onTextChange}
            value={text}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
            >Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddComment.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default AddComment;