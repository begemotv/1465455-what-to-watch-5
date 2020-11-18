import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import FilmList from "../film-list/film-list";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import Avatar from "../avatar/avatar";
import SignInLink from "../sign-in-link/sign-in-link";
import withShowMoreButtonCount from "../../hocs/with-show-more-button-count/with-show-more-button-count";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {AuthorizationStatus} from "../../const";

const FilmListHOC = withActiveItem(withShowMoreButtonCount(FilmList));

const MyListScreen = (props) => {
  const {authorizationStatus, films} = props;

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
        <FilmListHOC films={films}/>
      </section>
      <Footer />
    </div>
  );
};

MyListScreen.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {MyListScreen};
export default connect(mapStateToProps)(MyListScreen);
