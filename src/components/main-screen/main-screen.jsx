import React from "react";
import PropTypes from "prop-types";

import {filmPropTypes} from "../../prop-types";
import FilmList from "../film-list/film-list";
import Logo from "../logo/logo";
import Avatar from "../avatar/avatar";
import GenreList from "../genre-list/genre-list";
import withShowMoreButtonCount from "../../hocs/with-show-more-button-count/with-show-more-button-count";
import withActiveFilm from "../../hocs/with-active-film/with-active-film";

const FilmListHOC = withActiveFilm(withShowMoreButtonCount(FilmList));

const MainScreen = (props) => {
  const {
    film: {
      genre,
      id,
      name,
      poster,
      previewImg,
      releaseYear
    },
    films,
    handleMyListBtnClick,
    handlePlayBtnClick
  } = props;

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={previewImg} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo linkClassName={`logo__link`}/>
        <Avatar />
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
        <FilmListHOC films={films} />
      </section>

      <footer className="page-footer">
        <Logo linkClassName={`logo__link logo__link--light`}/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

MainScreen.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  handleMyListBtnClick: PropTypes.func.isRequired,
  handlePlayBtnClick: PropTypes.func.isRequired
};

export default MainScreen;
