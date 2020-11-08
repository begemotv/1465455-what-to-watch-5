import React from "react";
import PropTypes from "prop-types";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";

const MoreLikeThisFilms = (props) => {
  const {
    activeItem,
    genreFilms,
    onItemInteraction,
    onItemInteractionEnd
  } = props;
  const genreFilmsFour = genreFilms.slice(0, 4);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {genreFilmsFour.map((film) =>
          <FilmCard
            key={film.id}
            film={film}
            onItemInteraction={onItemInteraction}
            onItemInteractionEnd={onItemInteractionEnd}
            isCardActive={film.id === activeItem}
          />)}
      </div>
    </section>
  );
};

MoreLikeThisFilms.propTypes = {
  activeItem: PropTypes.number.isRequired,
  genreFilms: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ),
  onItemInteraction: PropTypes.func.isRequired,
  onItemInteractionEnd: PropTypes.func.isRequired,
};

export default MoreLikeThisFilms;
