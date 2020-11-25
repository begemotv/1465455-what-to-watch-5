import React from "react";
import PropTypes from "prop-types";

const LoadMoreButton = (props) => {
  const {onShowMoreButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreButtonClick}
      >Show more</button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired
};

export default LoadMoreButton;
