import React from "react";
import {Link} from "react-router-dom";

import Footer from "../footer/footer";
import Logo from "../logo/logo";

const ErrorServer = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo linkClassName={`logo__link`}/>
        <h1 className="page-title user-page__title visually-hidden">Loading error</h1>
      </header>

      <div className="sign-in__message">
        <p>Sorry, there was an error on the server.</p>
        <p>Please try again.</p>
        <br />
        <Link to="/" className="user-block__link">Go Home</Link>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorServer;
