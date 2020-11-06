import React from "react";
import PropTypes from "prop-types";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";

const MoreLikeThisFilms = (props) => {
  const {genreFilms, onFilmCardMouseOver} = props;
  const genreFilmsFour = genreFilms.slice(0, 4);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {genreFilmsFour.map((film) =>
          <FilmCard
            key={film.id}
            film={film}
            onFilmCardMouseOver={onFilmCardMouseOver}
          />)}
      </div>
    </section>
  );
};

MoreLikeThisFilms.propTypes = {
  genreFilms: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ),
  onFilmCardMouseOver: PropTypes.func.isRequired
};

export default MoreLikeThisFilms;
