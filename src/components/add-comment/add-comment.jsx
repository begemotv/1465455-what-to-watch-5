import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AddComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ratingStars: [false, false, false, false, false],
      text: ``
    };
  }

  render() {
    const {onCommentAdd} = this.props;
    const {ratingStars: userRatingStars, text} = this.state;

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
              {userRatingStars.map((star, index) => (
                <React.Fragment key={`star-${index + 1}`}>
                  <input
                    className="rating__input"
                    id={`star-${index + 1}`}
                    type="radio"
                    name="rating"
                    value={index + 1}
                    onChange={(evt) => {
                      const value = evt.target.checked;
                      this.setState({
                        ratingStars: [...userRatingStars.slice(0, i), value, ...userRatingStars.slice(i + 1)],
                      });
                    }}
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
              onChange={(evt) => {
                const input = evt.target.value;
                this.setState({text: input});
              }}
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
