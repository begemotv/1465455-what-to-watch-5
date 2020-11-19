import React from "react";
import PropTypes from "prop-types";

const MyListButton = (props) => {
  const {id, isFavorite, onFavoritesButtonClick} = props;

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => onFavoritesButtonClick(id, !isFavorite)}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
      </svg>
      <span>{isFavorite ? `Added` : `My list`}</span>
    </button>
  );
};

MyListButton.propTypes = {
  id: PropTypes.number,
  isFavorite: PropTypes.bool.isRequired,
  onFavoritesButtonClick: PropTypes.func.isRequired,
};

export default MyListButton;
