import React from "react";
import PropTypes from "prop-types";

import {filmPropTypes} from "../../prop-types";

const TabOverview = (props) => {
  const {
    film: {
      description,
      director,
      rating,
      ratingName,
      starring,
      voteCount
    },
  } = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingName}</span>
          <span className="movie-rating__count">{voteCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and others</strong></p>
      </div>
    </React.Fragment>
  );
};

TabOverview.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
};

export default TabOverview;
