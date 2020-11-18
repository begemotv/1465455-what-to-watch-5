import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {filmPropTypes} from "../../prop-types";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";
import withReviewsLoaded from "../../hocs/with-reviews-loaded/with-reviews-loaded";

const TabReviewsHOC = withReviewsLoaded(TabReviews);

const TAB_NAMES = [`Overview`, `Details`, `Reviews`];

const TabBar = (props) => {
  const {
    activeItem,
    film,
    onItemInteraction,
  } = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TAB_NAMES.map((tab, i) => (
            <li
              key={i}
              className={`movie-nav__item ${i === activeItem ? `movie-nav__item--active` : ``}`}>
              <Link
                to="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onItemInteraction(i);
                }}
              >{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {activeItem === 0 &&
            <TabOverview film={film}/>
        }
        {activeItem === 1 &&
            <TabDetails film={film}/>
        }
        {activeItem === 2 &&
            <TabReviewsHOC id={film.id}/>
        }
      </div>
    </React.Fragment>
  );
};

TabBar.propTypes = {
  activeItem: PropTypes.number.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired,
  onItemInteraction: PropTypes.func.isRequired,
};

export default TabBar;

