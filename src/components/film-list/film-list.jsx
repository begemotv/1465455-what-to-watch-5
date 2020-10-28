import React from "react";
import PropTypes from "prop-types";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";

const FilmList = (props) => {
  const {films, handleFilmCardClick, genre} = props;
  let genreFilms;

  if (genre) {
    genreFilms = films.filter((i) => genre.includes(i.genre));
  }

  return (
    <React.Fragment>
      {genre !== undefined &&
        <div className="catalog__movies-list">
          {genreFilms.map((film) =>
            <FilmCard
              key={film.id}
              film={film}
              handleFilmCardClick={handleFilmCardClick}
            />)}
        </div>
      }
      {genre === undefined &&
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
  genre: PropTypes.string,
  handleFilmCardClick: PropTypes.func.isRequired
};

export default FilmList;

