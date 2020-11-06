import React from "react";
import PropTypes from 'prop-types';

import {filmPropTypes} from "../../prop-types";
import FilmList from "../film-list/film-list";
import Logo from "../logo/logo";
import Avatar from "../avatar/avatar";
import withShowMoreButtonCount from "../../hocs/with-show-more-button-count/with-show-more-button-count";
import withActiveFilm from "../../hocs/with-active-film/with-active-film";

const FilmListHOC = withActiveFilm(withShowMoreButtonCount(FilmList));

const MyListScreen = (props) => {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo linkClassName={`logo__link`}/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmListHOC films={films}/>
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
  ).isRequired
};

export default MyListScreen;
