import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {film, key, onCardClick} = props;
  const {previewImg, name, link} = film;
  console.log(props)
  console.log(name)

  return (
    <article key={key} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImg} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onCardClick} className="small-movie-card__link" href={link}>{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  key: PropTypes.number.isRequired,
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    previewImg: PropTypes. string.isRequired
  })
};

export default FilmCard;

