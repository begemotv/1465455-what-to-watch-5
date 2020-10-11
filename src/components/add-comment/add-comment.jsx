import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const TOP_RATING = 5;

class AddComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ratingStars: 5,
      text: ``
    };

    this.handleRatingChange = this._handleRatingChange.bind(this);
    this.handleTextChange = this._handleTextChange.bind(this);
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

  render() {
    const {onCommentAdd} = this.props;
    const {ratingStars: userRatingStars, text} = this.state;
    const ratingTempArr = new Array(TOP_RATING).fill(``);

    return (
      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            onCommentAdd(text, userRatingStars);
          }}
        >
          <div className="rating">
            <div className="rating__stars">
              {ratingTempArr.map((star, index) => (
                <React.Fragment key={`star-${index + 1}`}>
                  <input
                    className="rating__input"
                    id={`star-${index + 1}`}
                    type="radio"
                    name="rating"
                    value={index + 1}
                    onChange={this.handleRatingChange}
                  />
                  <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
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
              onChange={this.handleTextChange}
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
  }
}

AddComment.propTypes = {
  onCommentAdd: PropTypes.func.isRequired
};

export default AddComment;
