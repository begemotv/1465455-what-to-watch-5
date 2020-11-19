import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import FilmCard from "../film-card/film-card";
import {changeActiveFilmId, changeActiveFilmIdGenre} from "../../store/action";
import {filmPropTypes} from "../../prop-types";

const MyListFilms = (props) => {
  const {
    activeItem,
    changeActiveFilmAction,
    films,
    onItemInteraction,
    onItemInteractionEnd
  } = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <FilmCard
          key={film.id}
          film={film}
          onCardClick={() => changeActiveFilmAction(film.id, film.genre)}
          onItemInteraction={onItemInteraction}
          onItemInteractionEnd={onItemInteractionEnd}
          isCardActive={film.id === activeItem}
        />)}
    </div>
  );
};

MyListFilms.propTypes = {
  activeItem: PropTypes.number.isRequired,
  changeActiveFilmAction: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ),
  onItemInteraction: PropTypes.func.isRequired,
  onItemInteractionEnd: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilmAction(id, genre) {
    dispatch(changeActiveFilmId(id));
    dispatch(changeActiveFilmIdGenre(genre));
  },
});

export {MyListFilms};
export default connect(null, mapDispatchToProps)(MyListFilms);
