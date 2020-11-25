import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Avatar from "../avatar/avatar";
import Logo from "../logo/logo";
import SignInLink from "../sign-in-link/sign-in-link";
import {AuthorizationStatus} from "../../const";

const Header = (props) => {
  const {authorizationStatus} = props;

  return (
    <header className="page-header movie-card__head">
      <Logo linkClassName={`logo__link`}/>
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <Avatar /> : <SignInLink />}
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export default connect(mapStateToProps)(Header);
