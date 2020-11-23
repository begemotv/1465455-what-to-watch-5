import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import FilmCard from "../film-card/film-card";
import {changeActiveFilmId, changeActiveFilmIdGenre, resetActiveTab, resetfilmCardsShownCount} from "../../store/action";
import {filmPropTypes} from "../../prop-types";

const FilmList = (props) => {
  const {
    activeItem,
    films,
    changeActiveFilmAction,
    onItemInteraction,
    onItemInteractionEnd
  } = props;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

FilmList.propTypes = {
  activeItem: PropTypes.number.isRequired,
  changeActiveFilmAction: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  onItemInteraction: PropTypes.func.isRequired,
  onItemInteractionEnd: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilmAction(id, genre) {
    dispatch(changeActiveFilmId(id));
    dispatch(changeActiveFilmIdGenre(genre));
    dispatch(resetActiveTab());
    dispatch(resetfilmCardsShownCount());
  },
});

export default connect(null, mapDispatchToProps)(FilmList);
