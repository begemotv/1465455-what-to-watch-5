import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import ErrorPopup from "../error-popup/error-popup";
import FilmList from "../film-list/film-list";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import Avatar from "../avatar/avatar";
import {filmPropTypes} from "../../prop-types";

const MyListScreen = (props) => {
  const {filmsFavorite} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo linkClassName={`logo__link`}/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={filmsFavorite}/>
      </section>
      <Footer />
      <ErrorPopup />
    </div>
  );
};

MyListScreen.propTypes = {
  filmsFavorite: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired
};

const mapStateToProps = ({USER}) => ({
  filmsFavorite: USER.filmsFavorite,
});

export default connect(mapStateToProps)(MyListScreen);
