import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import AddReview from "../add-review/add-review";
import Avatar from "../avatar/avatar";
import ErrorPopup from "../error-popup/error-popup";
import Logo from "../logo/logo";
import withReview from "../../hocs/with-review/with-review";
import {filmPropTypes} from "../../prop-types";
import {AppRoute} from "../../const";
import {getFilm} from "../../store/selectors";
import {postFilmReview} from "../../store/api-actions/api-actions";
import {changeReviewFormStatus} from "../../store/action";

const AddReviewHOC = withReview(AddReview);

const AddReviewScreen = (props) => {
  const {
    film: {
      backgroundColor,
      backgroundImage,
      id,
      name,
      poster,
    },
    onReviewAdd,
  } = props;

  return (
    <section
      className="movie-card movie-card--full"
      style={{backgroundColor: `${backgroundColor}`}}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo linkClassName={`logo__link`}/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILMS}${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILMS}${id}${AppRoute.REVIEW}`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <Avatar />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={poster}
            alt={name}
            width="218" height="327" />
        </div>
      </div>
      <AddReviewHOC id={id} backgroundColor={backgroundColor} onReviewAdd={onReviewAdd} />
      <ErrorPopup />
    </section>
  );
};

AddReviewScreen.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  onReviewAdd: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  const idInteger = parseInt(id, 10);
  return ({
    film: getFilm(state, idInteger),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onReviewAdd(id, comment, rating) {
    dispatch(changeReviewFormStatus(true));
    dispatch(postFilmReview(id, comment, rating));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
