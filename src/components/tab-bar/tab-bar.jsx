import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";
import {filmPropTypes} from "../../prop-types";
import {fetchFilmReviews} from "../../store/api-actions/api-actions";
import {changeActiveTab} from "../../store/action";


const TAB_NAMES = [`Overview`, `Details`, `Reviews`];

const TabBar = (props) => {
  const {
    activeTab,
    film,
    getActiveReviews,
    changeActiveTabAction,
  } = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TAB_NAMES.map((tab, i) => (
            <li
              key={i}
              className={`movie-nav__item ${i === activeTab && `movie-nav__item--active`}`}>
              <Link
                to="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  changeActiveTabAction(i);
                  getActiveReviews(film.id);
                }}
              >{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {activeTab === 0 &&
            <TabOverview film={film}/>
        }
        {activeTab === 1 &&
            <TabDetails film={film}/>
        }
        {activeTab === 2 &&
            <TabReviews id={film.id}/>
        }
      </div>
    </React.Fragment>
  );
};

TabBar.propTypes = {
  activeTab: PropTypes.number.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired,
  changeActiveTabAction: PropTypes.func.isRequired,
  getActiveReviews: PropTypes.func.isRequired,
};

const mapStateToProps = ({OPERATIONS}) => ({
  activeTab: OPERATIONS.activeTab,
});

const mapDispatchToProps = (dispatch) => ({
  getActiveReviews(id) {
    dispatch(fetchFilmReviews(id));
  },
  changeActiveTabAction(i) {
    dispatch(changeActiveTab(i));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
