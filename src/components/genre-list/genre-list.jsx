import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import {ActionCreator} from "../../store/action";

const GenreList = (props) => {
  const {
    activeGenre,
    filmsAll,
    handleGenreTabClick,
    id
  } = props;

  let genreList = filmsAll
    .map((item) => item.genre)
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .slice(0, 9);

  genreList.unshift(`All genres`);

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
        <li
          key={`genre-${genre}`}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <Link
            to="#"
            className="catalog__genres-link"
            onClick={
              (evt) => {
                evt.preventDefault();
                handleGenreTabClick(genre, id);
              }}
          >{genre}</Link>
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  filmsAll: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  handleGenreTabClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  filmsAll: state.filmsAll
});

const mapDispatchToProps = (dispatch) => ({
  handleGenreTabClick(genre, id) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterByGenre(genre, id));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
