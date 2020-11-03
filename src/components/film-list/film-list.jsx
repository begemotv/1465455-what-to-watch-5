import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";

const STEP = 8;

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      increment: 8
    };

    this.handleShowMoreButton = this._handleShowMoreButton.bind(this);
  }

  _handleShowMoreButton() {
    this.setState((prevState) => {
      return {
        increment: prevState.increment + STEP
      };
    });
  }

  render() {
    const {handleFilmCardClick, filmsByGenre} = this.props;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {(filmsByGenre.slice(0, this.state.increment))
            .map((film) =>
              <FilmCard
                key={film.id}
                film={film}
                handleFilmCardClick={handleFilmCardClick}
              />)}
        </div>

        {this.state.increment <= filmsByGenre.length &&
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={this.handleShowMoreButton}
          >Show more</button>
        </div>}
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
