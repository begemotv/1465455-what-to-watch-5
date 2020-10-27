import React from "react";
import PropTypes from "prop-types";

import {filmPropTypes, reviewPropTypes} from "../../prop-types";

const Tab = (props) => {
  const {
    film: {
      description,
      director,
      genre,
      rating,
      ratingName,
      releaseYear,
      runningTime,
      starring,
      voteCount
    },
    reviewsFilm,
    tab} = props;

  const reviewsArr = reviewsFilm.reviews;

  return (
    <React.Fragment>
      {tab === 0 &&
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
      }
      {tab === 1 &&
        <React.Fragment>
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {starring.map((actor, i) => (
                    <span key={i}>
                      {actor}<br />
                    </span>
                  ))}
                </span>
              </p>
            </div>

            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{runningTime}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{releaseYear}</span>
              </p>
            </div>
          </div>
        </React.Fragment>
      }
      {tab === 2 &&
        <React.Fragment>
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">

              {reviewsArr.map((item, i) => (
                <div className="review" key={i}>
                  <blockquote className="review__quote">
                    <p className="review__text">{item.text}</p>

                    <footer className="review__details">
                      <cite className="review__author">{item.username}</cite>
                      <time className="review__date" dateTime={item.timeStamp}>{item.date}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{item.rating}</div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      }
    </React.Fragment>
  );
};

Tab.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  reviewsFilm: PropTypes.shape(reviewPropTypes).isRequired,
  tab: PropTypes.number.isRequired,
};

export default Tab;
