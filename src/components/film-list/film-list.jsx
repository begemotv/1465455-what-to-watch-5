import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";
import LoadMoreButton from "../load-more-button/load-more-button";

const FilmList = (props) => {
  const {
    activeItem,
    filmsByGenre,
    moviesShownOverall,
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
  filmsByGenre: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  moviesShownOverall: PropTypes.number.isRequired,
  onItemInteraction: PropTypes.func.isRequired,
  onItemInteractionEnd: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filmsByGenre: state.filmsByGenre,
});

export {FilmList};
export default connect(mapStateToProps)(FilmList);
