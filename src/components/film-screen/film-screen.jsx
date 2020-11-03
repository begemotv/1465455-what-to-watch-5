import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {filmPropTypes, reviewPropTypes} from "../../prop-types";
import {filterFilmsByGenre} from "../../core";
import Logo from "../logo/logo";
import Avatar from "../avatar/avatar";
import TabBar from "../tab-bar/tab-bar";
import MoreLikeThisFilms from "../more-like-this-films/more-like-this-films";

const findReviews = (reviews, filmName) => {
  const reviewsFilm = reviews.find((value) => value.name === filmName);
  return reviewsFilm;
};

const FilmScreen = (props) => {
  const {
    film: {
      genre,
      id,
      name,
      poster,
      previewImg,
      releaseYear
    },
    handleFilmCardClick,
    handleMyListBtnClick,
    handlePlayBtnClick,
    reviews
  } = props;

  const reviewsFilm = findReviews(reviews, name);
  const genreFilms = filterFilmsByGenre(genre, id);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={previewImg} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo linkClassName={`logo__link`}/>
            <Avatar />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handlePlayBtnClick(id);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={handleMyListBtnClick}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={poster}
                alt={`${name} poster`}
                width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabBar film={props.film} reviewsFilm={reviewsFilm}/>
            </div>
          </div>
        </div>
      </section>


      <div className="page-content">
        <MoreLikeThisFilms handleFilmCardClick={handleFilmCardClick} genreFilms={genreFilms}/>

        <footer className="page-footer">
          <Logo linkClassName={`logo__link logo__link--light`}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

FilmScreen.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  handlePlayBtnClick: PropTypes.func.isRequired,
  handleMyListBtnClick: PropTypes.func.isRequired,
  handleFilmCardClick: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes)
  ).isRequired,
};

export default FilmScreen;
