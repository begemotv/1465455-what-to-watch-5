import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {AppRoute} from "../../const";
import {userPropTypes} from "../../prop-types";

const Avatar = (props) => {
  const {user: {avatar}} = props;
  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <Link to={AppRoute.MYLIST}>
          <img src={avatar} alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.shape(userPropTypes),
};

const mapStateToProps = ({USER}) => ({
  user: USER.activeUser,
});

export default connect(mapStateToProps)(Avatar);
