import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {login} from "../../store/api-actions/api-actions";

const withError = (Component) => {
  class WithError extends PureComponent {
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

      const isEmailValid = this._handleEmailValidation(this.loginRef.current.value);

      if (isEmailValid) {
        this.setState({isValid: true});
        onSubmit({
          login: this.loginRef.current.value,
          password: this.passwordRef.current.value,
        });
      } else {
        this.setState({isValid: false});
      }
    }

    _handleEmailValidation(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(email);
    }

    render() {
      const {isValid} = this.state;

      return (
        <Component
          onSubmit={this.handleSubmit}
          isValid={isValid}
          loginRef={this.loginRef}
          passwordRef={this.passwordRef}
        />
      );
    }
  }

  WithError.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(authData) {
      dispatch(login(authData));
    }
  });

  return connect(null, mapDispatchToProps)(WithError);
};

export {withError};
export default withError;
