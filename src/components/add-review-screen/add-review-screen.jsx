import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {filmPropTypes} from "../../prop-types";
import AddComment from "../add-comment/add-comment";
import Logo from "../logo/logo";
import AvatarOrSignIn from "../avatar/avatar";
import withComment from "../../hocs/with-comment/with-comment";
import {AppRoute} from "../../const";

const AddCommentHOC = withComment(AddComment);

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
      <AddCommentHOC id={id} backgroundColor={backgroundColor}/>
    </section>
  );
};

AddReviewScreen.propTypes = {
  onCommentAdd: PropTypes.func.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired
};

export default AddReviewScreen;
