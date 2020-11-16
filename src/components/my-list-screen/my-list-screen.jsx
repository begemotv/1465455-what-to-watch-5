import React from "react";
import PropTypes from 'prop-types';

import {filmPropTypes} from "../../prop-types";
import FilmList from "../film-list/film-list";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import AvatarOrSignIn from "../avatar-or-sign-in/avatar-or-sign-in";
import withShowMoreButtonCount from "../../hocs/with-show-more-button-count/with-show-more-button-count";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const FilmListHOC = withActiveItem(withShowMoreButtonCount(FilmList));

const MyListScreen = (props) => {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo linkClassName={`logo__link`}/>
        <h1 className="page-title user-page__title">My list</h1>
        <AvatarOrSignIn />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmListHOC films={films}/>
      </section>
      <Footer />
    </div>
  );
};

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired
};

export default MyListScreen;
