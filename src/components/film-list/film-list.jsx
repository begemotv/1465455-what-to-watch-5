import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import FilmCard from "../film-card/film-card";
import LoadMoreButton from "../load-more-button/load-more-button";
import {changeActiveFilmId, changeActiveFilmIdGenre} from "../../store/action";
import {getFilmsByGenre} from "../../store/selectors";
import {filmPropTypes} from "../../prop-types";

const FilmList = (props) => {
  const {
    activeItem,
    filmsByGenre,
    moviesShownOverall,
    changeActiveFilmAction,
    onItemInteraction,
    onItemInteractionEnd,
    onShowMoreButtonClick
  } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {(filmsByGenre.slice(0, moviesShownOverall))
            .map((film) =>
              <FilmCard
                key={film.id}
                film={film}
                onCardClick={() => changeActiveFilmAction(film.id, film.genre)}
                onItemInteraction={onItemInteraction}
                onItemInteractionEnd={onItemInteractionEnd}
                isCardActive={film.id === activeItem}
              />)}
      </div>
      {moviesShownOverall <= filmsByGenre.length &&
            <LoadMoreButton onShowMoreButtonClick={onShowMoreButtonClick}/>}
    </React.Fragment>
  );
};

FilmList.propTypes = {
  activeItem: PropTypes.number.isRequired,
  changeActiveFilmAction: PropTypes.func.isRequired,
  filmsByGenre: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  moviesShownOverall: PropTypes.number.isRequired,
  onItemInteraction: PropTypes.func.isRequired,
  onItemInteractionEnd: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filmsByGenre: getFilmsByGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilmAction(id, genre) {
    dispatch(changeActiveFilmId(id));
    dispatch(changeActiveFilmIdGenre(genre));
  },
});

export {FilmList};
export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
