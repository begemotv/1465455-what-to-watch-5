import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {changeTabGenre, resetMovieCardsShownCount} from "../../store/action";
import {getGenreList} from "../../store/selectors";

const GenreList = (props) => {
  const {
    activeGenre,
    genreList,
    handleGenreTabClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
        <li
          key={`genre-${genre}`}
          className={`catalog__genres-item ${genre === activeGenre && `catalog__genres-item--active`}`}>
          <Link
            to="#"
            className="catalog__genres-link"
            onClick={
              (evt) => {
                evt.preventDefault();
                handleGenreTabClick(genre);
              }}
          >{genre}</Link>
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genreList: PropTypes.arrayOf(
      PropTypes.string).isRequired,
  handleGenreTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, {OPERATIONS} = state) => ({
  activeGenre: OPERATIONS.activeGenre,
  genreList: getGenreList(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleGenreTabClick(genre) {
    dispatch(changeTabGenre(genre));
    dispatch(resetMovieCardsShownCount());
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
