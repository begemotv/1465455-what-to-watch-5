import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {filmPropTypes} from "../../prop-types";
import FilmCard from "../film-card/film-card";

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null
    };
  }

  render() {
    const {films, handleFilmCardClick} = this.props;
    console.log(this.props)

    return (
      <div className="catalog__movies-list">
        {films.map((film) =>
          <FilmCard
            key={film.id}
            film={film}
            handleFilmCardMouseOver={() => {
              this.setState({activeFilm: film.id});
            }}
            handleFilmCardClick={handleFilmCardClick}
          />)}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  handleFilmCardClick: PropTypes.func.isRequired
};

export default FilmList;

