import React from "react";
import PropTypes from "prop-types";

import Logo from "../logo/logo";
import Footer from "../footer/footer";

const SignInScreen = (props) => {
  const {isValid, loginRef, onSubmit, passwordRef} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo linkClassName={`logo__link`}/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={onSubmit}
        >
          {
            isValid
              ? ``
              : <div className="sign-in__message">
                <p>Please enter a valid email address</p>
              </div>
          }
          <div className="sign-in__fields">
            <div className={`sign-in__field ${isValid ? `` : `sign-in__field--error`}`}>
              <input
                className="sign-in__input"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

SignInScreen.propTypes = {
  isValid: PropTypes.bool.isRequired,
  loginRef: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  passwordRef: PropTypes.object.isRequired,
};

export default SignInScreen;
