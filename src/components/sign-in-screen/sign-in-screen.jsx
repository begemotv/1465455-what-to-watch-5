import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import ErrorPopup from "../error-popup/error-popup";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import {login} from "../../store/api-actions/api-actions";

class SignInScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.state = {
      isValid: true,
    };

    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;
    evt.preventDefault();

    this.setState({isValid: true});
    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
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
            onSubmit={this.handleSubmit}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={this.loginRef}
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
                  ref={this.passwordRef}
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
        <ErrorPopup />
      </div>
    );
  }

}

SignInScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export default connect(null, mapDispatchToProps)(SignInScreen);
