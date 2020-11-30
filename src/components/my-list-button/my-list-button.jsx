import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFavoriteStatus} from "../../store/selectors";
import {addToFavorites} from "../../store/api-actions/api-actions";

const MyListButton = (props) => {
  const {id, isFavorite, onAddToFavorites} = props;

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => onAddToFavorites(id, !isFavorite)}
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
  onAddToFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  return ({
    isFavorite: getFavoriteStatus(state, id),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onAddToFavorites(id, status) {
    const statusInt = status ? 1 : 0;
    dispatch(addToFavorites(id, statusInt));
  },
});

export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
