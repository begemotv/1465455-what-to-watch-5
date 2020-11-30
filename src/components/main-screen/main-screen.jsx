import React from "react";
import PropTypes from "prop-types";

import ErrorPopup from "../error-popup/error-popup";
import Footer from "../footer/footer";
import Header from "../header/header";
import MainCatalog from "../main-catalog/main-catalog";
import MyListButton from "../my-list-button/my-list-button";
import PlayButton from "../play-button/play-button";
import {filmPropTypes} from "../../prop-types";

const MainScreen = (props) => {
  const {
    film: {
      backgroundImage,
      genre,
      id,
      name,
      poster,
      releaseYear
    },
    handlePlayButtonClick,
  } = props;

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header />
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
              <PlayButton id={id} onPlayButtonClick={handlePlayButtonClick} />
              <MyListButton id={id} />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <MainCatalog />
      <Footer />
    </div>
    <ErrorPopup />
  </React.Fragment>;
};

MainScreen.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  handlePlayButtonClick: PropTypes.func.isRequired,
};

export default MainScreen;
