import React from "react";
import {Link} from 'react-router-dom';

const GenreList = (props) => {
  const {films, genre: activeGenre} = props;
  let genreList = films
    .map((item) => item.genre)
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort((a, b) => a - b)
    .unshift(`All genres`);

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
        <li
          key={`genre-${genre}`}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <Link
            to="#"
            className="catalog__genres-link"
            onClick={() => this.handleTabClick(i)}
          >{genre}</Link>
        </li>
      ))}
    </ul>
  );
};

