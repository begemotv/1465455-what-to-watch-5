import React, {PureComponent} from 'react';

import Tab from "../tab/tab";
import {tabNames} from "../../const";

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
    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabNames.map((tab, i) => (
              <li
                key={i}
                className={`movie-nav__item ${i === this.state.activeTab ? `movie-nav__item--active` : ``}`}>
                <div
                  style={{cursor: `pointer`}}
                  key={i}
                  className="movie-nav__link"
                  onClick={() => this.handleTabClick(i)}
                >{tab}</div>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Tab tab={this.state.activeTab} {...this.props}/>
        </div>
      </React.Fragment>
    );
  }
}

export default TabBar;

