import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {filmPropTypes, reviewPropTypes} from "../../prop-types";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

const TAB_NAMES = [`Overview`, `Details`, `Reviews`];

const TabBar = (props) => {
  const {film, reviewsFilm, activeTab, onTabClick} = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TAB_NAMES.map((tab, i) => (
            <li
              key={i}
              className={`movie-nav__item ${i === activeTab ? `movie-nav__item--active` : ``}`}>
              <Link
                to="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onTabClick(i);
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
            <TabReviews reviewsFilm={reviewsFilm}/>
        }
      </div>
    </React.Fragment>
  );
};

TabBar.propTypes = {
  activeTab: PropTypes.number.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired,
  onTabClick: PropTypes.func.isRequired,
  reviewsFilm: PropTypes.shape(reviewPropTypes).isRequired
};

export default TabBar;

