import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import GenreList from "../genre-list/genre-list";
import FilmList from "../film-list/film-list";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getFilmsByGenre} from "../../store/selectors";
import LoadMoreButton from "../load-more-button/load-more-button";
import {incrementMovieCardsShownCount} from "../../store/action";
import {filmPropTypes} from "../../prop-types";

const FilmListHOC = withActiveItem(FilmList);

const MainCatalog = (props) => {
  const {filteredFilms, incrementCardCount, movieCardsShownCount} = props;
  const shownFilms = filteredFilms.slice(0, movieCardsShownCount);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList />
      <FilmListHOC films={shownFilms} />
      {
        movieCardsShownCount <= filteredFilms.length
          && <LoadMoreButton onShowMoreButtonClick={incrementCardCount} />
      }
    </section>
  );
};

MainCatalog.propTypes = {
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  incrementCardCount: PropTypes.func.isRequired,
  movieCardsShownCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state, {OPERATIONS} = state) => ({
  filteredFilms: getFilmsByGenre(state),
  movieCardsShownCount: OPERATIONS.movieCardsShownCount,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCardCount() {
    dispatch(incrementMovieCardsShownCount());
  },
});

export {MainCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MainCatalog);
