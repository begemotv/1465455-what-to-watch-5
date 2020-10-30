import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {filmPropTypes} from "../../prop-types";
import AddComment from "../add-comment/add-comment";
import Logo from "../logo/logo";
import Avatar from "../avatar/avatar";

const AddReviewScreen = (props) => {
  const {
    film: {
      id,
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
          <Logo linkClassName={`logo__link`}/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
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
      <AddComment onCommentAdd={onCommentAdd} />
    </section>
  );
};

AddReviewScreen.propTypes = {
  onCommentAdd: PropTypes.func.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired
};

export default AddReviewScreen;
