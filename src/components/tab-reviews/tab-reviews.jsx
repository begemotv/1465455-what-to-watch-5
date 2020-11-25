import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Preloader from "../preloader/preloader";
import {reviewPropTypes} from "../../prop-types";
import {convertDate} from "../../utils";
import {getReviews} from "../../store/selectors";
import {NameSpace} from "../../store/reducers";

const TabReviews = (props) => {
  const {isFetching, reviews} = props;

  return isFetching
    ? <Preloader />
    : (<div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviews.map((item, i) => (
          <div className="review" key={i}>
            <blockquote className="review__quote">
              <p className="review__text">{item.text}</p>

              <footer className="review__details">
                <cite className="review__author">{item.user.name}</cite>
                <time className="review__date" dateTime={item.timeStamp}>{convertDate(item.timeStamp)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{item.rating}</div>
          </div>
        ))}
      </div>
    </div>);
};

TabReviews.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes)
  ),
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  isFetching: state[NameSpace.DATA].isFetching,
});

export default connect(mapStateToProps)(TabReviews);
