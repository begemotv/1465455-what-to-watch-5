import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import GenreList from "../genre-list/genre-list";
import FilmList from "../film-list/film-list";
import {getFilmsToShow, getHasMoreFilmsStatus} from "../../store/selectors";
import LoadMoreButton from "../load-more-button/load-more-button";
import {incrementfilmCardsShownCount} from "../../store/action";
import {filmPropTypes} from "../../prop-types";

const MainCatalog = (props) => {
  const {filmsToShow, hasMoreFilms, incrementCardCount} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList />
      <FilmList films={filmsToShow} />
      {
        hasMoreFilms
          && <LoadMoreButton onShowMoreButtonClick={incrementCardCount} />
      }
    </section>
  );
};

MainCatalog.propTypes = {
  filmsToShow: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  hasMoreFilms: PropTypes.bool.isRequired,
  incrementCardCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmsToShow: getFilmsToShow(state),
  hasMoreFilms: getHasMoreFilmsStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  incrementCardCount() {
    dispatch(incrementfilmCardsShownCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainCatalog);
