import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";
import {changeActiveFilmId, changeActiveFilmIdGenre} from "../../store/action";
import {fetchFilm, fetchFilmReviews} from "../../store/api-actions/api-actions";
import {getMoreLikeFilms} from "../../store/selectors";

const MoreLikeThisFilms = (props) => {
  const {
    activeItem,
    changeActiveFilmAction,
    moreLikeFilms,
    onItemInteraction,
    onItemInteractionEnd
  } = props;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {moreLikeFilms.map((film) =>
          <FilmCard
            key={film.id}
            film={film}
            onCardClick={() => changeActiveFilmAction(film.id, film.genre)}
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
  changeActiveFilmAction: PropTypes.func.isRequired,
  moreLikeFilms: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ),
  onItemInteraction: PropTypes.func.isRequired,
  onItemInteractionEnd: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moreLikeFilms: getMoreLikeFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilmAction(id, genre) {
    dispatch(changeActiveFilmId(id));
    dispatch(changeActiveFilmIdGenre(genre));
    dispatch(fetchFilm(id));
    dispatch(fetchFilmReviews(id));
  },
});

export {MoreLikeThisFilms};
export default connect(mapStateToProps, mapDispatchToProps)(MoreLikeThisFilms);
