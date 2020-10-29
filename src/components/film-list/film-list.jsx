import React from "react";
import PropTypes from "prop-types";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";

const FilmList = (props) => {
  const {films, genreFilms, handleFilmCardClick} = props;

  return (
    <React.Fragment>
      {genreFilms !== undefined &&
        <div className="catalog__movies-list">
          {genreFilms.map((film) =>
            <FilmCard
              key={film.id}
              film={film}
              handleFilmCardClick={handleFilmCardClick}
            />)}
        </div>
      }
      {genreFilms === undefined &&
        <div className="catalog__movies-list">
          {films.map((film) =>
            <FilmCard
              key={film.id}
              film={film}
              handleFilmCardClick={handleFilmCardClick}
            />)}
        </div>
      }
    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  genreFilms: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ),
  handleFilmCardClick: PropTypes.func.isRequired
};

export default FilmList;

