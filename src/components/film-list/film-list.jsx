import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import FilmCard from "../film-card/film-card";
import {changeActiveFilmId, changeActiveFilmGenre, resetActiveTab, resetfilmCardsShownCount} from "../../store/action";
import {filmPropTypes} from "../../prop-types";

const FilmList = (props) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleActiveItemChange = (id) => {
    setActiveItem(id);
  };

  const handleActiveItemRemove = () => {
    setActiveItem(0);
  };

  const {
    films,
    changeActiveFilmAction,
  } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film) =>
          <FilmCard
            key={film.id}
            film={film}
            onCardClick={() => changeActiveFilmAction(film.id, film.genre)}
            onItemInteraction={handleActiveItemChange}
            onItemInteractionEnd={handleActiveItemRemove}
            isCardActive={film.id === activeItem}
          />)}
      </div>
    </React.Fragment>
  );
};

FilmList.propTypes = {
  changeActiveFilmAction: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilmAction(id, genre) {
    dispatch(changeActiveFilmId(id));
    dispatch(changeActiveFilmGenre(genre));
    dispatch(resetActiveTab());
    dispatch(resetfilmCardsShownCount());
  },
});

export {FilmList};
export default connect(null, mapDispatchToProps)(FilmList);
