import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";
import LoadMoreButton from "../load-more-button/load-more-button";

const MOVIES_ON_MORE_BUTTON_CLICK_COUNT = 8;
const MOVIES_SHOWN_ON_START_COUNT = 8;

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      MOVIES_SHOWN_OVERALL: MOVIES_SHOWN_ON_START_COUNT
    };

    this.handleShowMoreButton = this._handleShowMoreButton.bind(this);
  }

  _handleShowMoreButton() {
    this.setState((prevState) => {
      return {
        MOVIES_SHOWN_OVERALL: prevState.MOVIES_SHOWN_OVERALL + MOVIES_ON_MORE_BUTTON_CLICK_COUNT
      };
    });
  }

  render() {
    const {handleFilmCardClick, filmsByGenre} = this.props;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {(filmsByGenre.slice(0, this.state.MOVIES_SHOWN_OVERALL))
            .map((film) =>
              <FilmCard
                key={film.id}
                film={film}
                handleFilmCardClick={handleFilmCardClick}
              />)}
        </div>
        {this.state.MOVIES_SHOWN_OVERALL <= filmsByGenre.length &&
        <LoadMoreButton onButtonClick={this.handleShowMoreButton}/>}
      </React.Fragment>
    );
  }
}

FilmList.propTypes = {
  filmsByGenre: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  handleFilmCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filmsByGenre: state.filmsByGenre,
});

export {FilmList};
export default connect(mapStateToProps)(FilmList);
