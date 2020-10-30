import React from "react";
import PropTypes from 'prop-types';

import {filmPropTypes} from "../../prop-types";
import FilmList from "../film-list/film-list";
import Logo from "../logo/logo";
import Avatar from "../avatar/avatar";

const MyListScreen = (props) => {
  const {
    films,
    handleFilmCardClick
  } = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo linkClassName={`logo__link`}/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films} handleFilmCardClick={handleFilmCardClick} />
      </section>

      <footer className="page-footer">
        <Logo linkClassName={`logo__link logo__link--light`}/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  handleFilmCardClick: PropTypes.func.isRequired
};

export default MyListScreen;
