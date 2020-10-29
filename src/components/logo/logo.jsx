import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Logo = (props) => {
  const {linkClassName} = props;
  return (
    <div className="logo">
      <Link to="/" className={linkClassName}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  linkClassName: PropTypes.string.isRequired,
};

export default Logo;
