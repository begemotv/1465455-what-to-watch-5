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

const TabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const TabBar = (props) => {
  const {
    activeTab,
    film,
    getActiveReviews,
    changeActiveTabAction,
  } = props;

  const tabs = Object.values(TabNames);

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) => (
            <li
              key={i}
              className={`movie-nav__item ${tab === activeTab && `movie-nav__item--active`}`}>
              <Link
                to="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  changeActiveTabAction(tab);
                  getActiveReviews(film.id);
                }}
              >{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {activeTab === TabNames.OVERVIEW &&
            <TabOverview film={film}/>
        }
        {activeTab === TabNames.DETAILS &&
            <TabDetails film={film}/>
        }
        {activeTab === TabNames.REVIEWS &&
            <TabReviews id={film.id}/>
        }
      </div>
    </React.Fragment>
  );
};

TabBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
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
  changeActiveTabAction(tab) {
    dispatch(changeActiveTab(tab));
  },
});

export {TabBar};
export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
