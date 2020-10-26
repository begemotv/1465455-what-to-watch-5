import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import {filmPropTypes} from "../../prop-types";

const FilmCard = (props) => {
  const {
    film: {
      id,
      name,
      previewImg
    },
    handleFilmCardClick,
    handleFilmCardMouseOver
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={(evt) => {
        evt.preventDefault();
        handleFilmCardClick(id);
      }}
      onMouseOver={handleFilmCardMouseOver}
    >
      <div className="small-movie-card__image">
        <img src={previewImg} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  handleFilmCardClick: PropTypes.func.isRequired,
  handleFilmCardMouseOver: PropTypes.func.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired
};

export default FilmCard;

