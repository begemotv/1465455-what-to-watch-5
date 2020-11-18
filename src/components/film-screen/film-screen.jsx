import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import Avatar from "../avatar/avatar";
import SignInLink from "../sign-in-link/sign-in-link";
import TabBar from "../tab-bar/tab-bar";
import MoreLikeThisFilms from "../more-like-this-films/more-like-this-films";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {AppRoute, AuthorizationStatus} from "../../const";

const TabBarHOC = withActiveItem(TabBar);
const MoreLikeThisFilmsHOC = withActiveItem(MoreLikeThisFilms);

const FilmScreen = (props) => {
  const {
    authorizationStatus,
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
    handleMyListBtnClick,
    handlePlayBtnClick,
  } = props;

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
            {authorizationStatus === AuthorizationStatus.AUTH
              ? <Avatar /> : <SignInLink />}
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
                {
                  authorizationStatus === AuthorizationStatus.AUTH
                    ? <Link to={`${AppRoute.FILMS}${id}${AppRoute.REVIEW}`} className="btn movie-card__button">Add review</Link>
                    : ``
                }
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
              <TabBarHOC film={film} />
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
  authorizationStatus: PropTypes.string.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired,
  handlePlayBtnClick: PropTypes.func.isRequired,
  handleMyListBtnClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {FilmScreen};
export default connect(mapStateToProps)(FilmScreen);
