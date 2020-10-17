import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {filmPropTypes} from "../../prop-types";
import AddComment from "../add-comment/add-comment";

const AddReviewScreen = (props) => {
  const {
    film: {
      name,
      poster,
      previewImg,
    },
    onCommentAdd
  } = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={previewImg} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/films/:id" className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="/films/:id/review" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={poster}
            alt={name}
            width="218" height="327" />
        </div>
      </div>

      <AddComment onCommentAdd={onCommentAdd} />

    </section>
  );
};

AddReviewScreen.propTypes = {
  onCommentAdd: PropTypes.func.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired
};

export default AddReviewScreen;
