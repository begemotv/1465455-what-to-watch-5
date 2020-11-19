import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import AddReview from "../add-review/add-review";
import Logo from "../logo/logo";
import AvatarOrSignIn from "../avatar/avatar";
import withReview from "../../hocs/with-review/with-review";
import {filmPropTypes} from "../../prop-types";
import {AppRoute} from "../../const";

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
          <AvatarOrSignIn />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={poster}
            alt={name}
            width="218" height="327" />
        </div>
      </div>
      <AddReviewHOC id={id} backgroundColor={backgroundColor}/>
    </section>
  );
};

AddReviewScreen.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
};

export default AddReviewScreen;
