import React from "react";
import PropTypes from "prop-types";

const LoadMoreButton = (props) => {
  const {onButtonClick} = props;
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onButtonClick}
      >Show more</button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired
};

export default LoadMoreButton;
