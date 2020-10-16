import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AddComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ratingStars: 5,
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
    const {ratingStars: userRatingStars, text} = this.state;
    onCommentAdd(text, userRatingStars);
  }

  render() {
    const {text} = this.state;
    const ratingStarsArr = [1, 2, 3, 4, 5];

    return (
      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={this.handleCommentAdd}
        >
          <div className="rating">
            <div className="rating__stars">
              {ratingStarsArr.map((star) => (
                <React.Fragment key={`star-${star}`}>
                  <input
                    className="rating__input"
                    id={`star-${star}`}
                    type="radio"
                    name="rating"
                    value={star}
                    onChange={this.handleRatingChange}
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
