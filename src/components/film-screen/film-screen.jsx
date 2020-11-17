import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {filmPropTypes, reviewPropTypes} from "../../prop-types";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import AvatarOrSignIn from "../avatar-or-sign-in/avatar-or-sign-in";
import TabBar from "../tab-bar/tab-bar";
import Preloader from "../preloader/preloader";
import MoreLikeThisFilms from "../more-like-this-films/more-like-this-films";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {AppRoute} from "../../const";

const TabBarHOC = withActiveItem(TabBar);
const MoreLikeThisFilmsHOC = withActiveItem(MoreLikeThisFilms);

const findReviews = (reviews, filmName) => {
  const reviewsFilm = reviews.find((value) => value.name === filmName);
  return reviewsFilm;
};

const FilmScreen = (props) => {
  const {
    film: {
      backgroundColor,
      backgroundImage,
      genre,
      id,
      name,
      poster,
      releaseYear
    },
    film,
    filmAPI,
    isFetching,
    handleMyListBtnClick,
    handlePlayBtnClick,
    reviews,
    reviewsAPI
  } = props;

  const reviewsFilm = findReviews(reviews, name);
  console.log(filmAPI)
  console.log(reviewsAPI)

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: `${backgroundColor}`}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo linkClassName={`logo__link`}/>
            <AvatarOrSignIn />
            {isFetching ? <Preloader /> : null}
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
                <Link to={AppRoute.FILMS + id + AppRoute.REVIEW} className="btn movie-card__button">Add review</Link>
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
              <TabBarHOC film={film} reviewsFilm={reviewsFilm}/>
            </div>
          </div>
        </div>
      </section>


      <div className="page-content">
        <MoreLikeThisFilmsHOC />
        <Footer />
      </div>
    </React.Fragment>
  );
};

FilmScreen.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  filmAPI: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  handlePlayBtnClick: PropTypes.func.isRequired,
  handleMyListBtnClick: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes)
  ).isRequired,
  reviewsAPI: PropTypes.array,
};

const mapStateToProps = ({DATA}) => ({
  filmAPI: DATA.activeFilmDetails,
  reviewsAPI: DATA.activeFilmReviews,
  isFetching: DATA.isFetching,
});

export {FilmScreen};
export default connect(mapStateToProps)(FilmScreen);
