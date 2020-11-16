import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import {changeTabGenre} from "../../store/action";

const GenreList = (props) => {
  const {
    activeGenre,
    films,
    handleGenreTabClick,
    id
  } = props;

  let genreList = films
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
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  handleGenreTabClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapStateToProps = ({DATA, OPERATIONS}) => ({
  activeGenre: OPERATIONS.activeGenre,
  films: DATA.films
});

const mapDispatchToProps = (dispatch) => ({
  handleGenreTabClick(genre) {
    dispatch(changeTabGenre(genre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
