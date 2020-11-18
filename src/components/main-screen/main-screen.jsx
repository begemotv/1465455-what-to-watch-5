import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import FilmList from "../film-list/film-list";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import Avatar from "../avatar/avatar";
import SignInLink from "../sign-in-link/sign-in-link";
import GenreList from "../genre-list/genre-list";
import withShowMoreButtonCount from "../../hocs/with-show-more-button-count/with-show-more-button-count";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {AuthorizationStatus} from "../../const";

const FilmListHOC = withActiveItem(withShowMoreButtonCount(FilmList));

const MainScreen = (props) => {
  const {
    authorizationStatus,
    film: {
      backgroundImage,
      genre,
      id,
      name,
      poster,
      releaseYear
    },
    handleMyListBtnClick,
    handlePlayBtnClick
  } = props;

  return <React.Fragment>
    <section className="movie-card">
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
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={`${name} poster`} width="218" height="327" />
          </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreList id={id}/>
        <FilmListHOC />
      </section>
      <Footer />
    </div>
  </React.Fragment>;
};

MainScreen.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired,
  handleMyListBtnClick: PropTypes.func.isRequired,
  handlePlayBtnClick: PropTypes.func.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
