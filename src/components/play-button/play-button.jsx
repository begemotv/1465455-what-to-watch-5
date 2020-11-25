import React from "react";
import PropTypes from "prop-types";

const PlayButton = (props) => {
  const {id, onPlayButtonClick} = props;

  return (
    <button
      className="btn btn--play movie-card__button"
      type="button"
      onClick={(evt) => {
        evt.preventDefault();
        onPlayButtonClick(id);
      }}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

PlayButton.propTypes = {
  id: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default PlayButton;
