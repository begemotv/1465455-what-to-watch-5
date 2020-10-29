import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {filmPropTypes, reviewPropTypes} from "../../prop-types";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

class TabBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(i) {
    this.setState({activeTab: i});
  }

  render() {
    const tabNames = [`Overview`, `Details`, `Reviews`];
    const {film, reviewsFilm} = this.props;

    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabNames.map((tab, i) => (
              <li
                key={i}
                className={`movie-nav__item ${i === this.state.activeTab ? `movie-nav__item--active` : ``}`}>
                <Link
                  to="#"
                  className="movie-nav__link"
                  onClick={() => this.handleTabClick(i)}
                >{tab}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          {this.state.activeTab === 0 &&
            <TabOverview film={film}/>
          }
          {this.state.activeTab === 1 &&
            <TabDetails film={film}/>
          }
          {this.state.activeTab === 2 &&
            <TabReviews reviewsFilm={reviewsFilm}/>
          }
        </div>
      </React.Fragment>
    );
  }
}

TabBar.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  reviewsFilm: PropTypes.shape(reviewPropTypes).isRequired
};

export default TabBar;

