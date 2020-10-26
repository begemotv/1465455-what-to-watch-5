import React from "react";
import PropTypes from "prop-types";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";

const FilmList = (props) => {
  const {films, handleFilmCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <FilmCard
          key={film.id}
          film={film}
          handleFilmCardClick={handleFilmCardClick}
        />)}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  handleFilmCardClick: PropTypes.func.isRequired
};

export default FilmList;

