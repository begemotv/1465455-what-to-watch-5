import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import MyListFilms from "../my-list-films/my-list-films";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import Avatar from "../avatar/avatar";
import SignInLink from "../sign-in-link/sign-in-link";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {AuthorizationStatus} from "../../const";
import {filmPropTypes} from "../../prop-types";

const MyListFilmsHOC = withActiveItem(MyListFilms);

const MyListScreen = (props) => {
  const {authorizationStatus, filmsFavorite} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo linkClassName={`logo__link`}/>
        <h1 className="page-title user-page__title">My list</h1>
        {authorizationStatus === AuthorizationStatus.AUTH
          ? <Avatar /> : <SignInLink />}
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MyListFilmsHOC films={filmsFavorite}/>
      </section>
      <Footer />
    </div>
  );
};

MyListScreen.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  filmsFavorite: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  filmsFavorite: USER.filmsFavorite,
});

export {MyListScreen};
export default connect(mapStateToProps)(MyListScreen);
