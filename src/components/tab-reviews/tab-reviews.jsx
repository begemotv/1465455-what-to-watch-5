import React from "react";
import PropTypes from "prop-types";

import {reviewPropTypes} from "../../prop-types";
import {convertDate} from "../../utils";

const TabReviews = (props) => {
  const {reviewsFilm: {reviews}} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviews.map((item, i) => (
          <div className="review" key={i}>
            <blockquote className="review__quote">
              <p className="review__text">{item.text}</p>

              <footer className="review__details">
                <cite className="review__author">{item.username}</cite>
                <time className="review__date" dateTime={item.timeStamp}>{convertDate(item.timeStamp)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{item.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

TabReviews.propTypes = {
  reviewsFilm: PropTypes.shape(reviewPropTypes).isRequired,
};

export default TabReviews;
