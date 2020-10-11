import React, {PureComponent} from "react";
import PropTypes from "prop-types";
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

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) =>
          <FilmCard
            key={`film-${index}`}
            film={film}
            handleFilmCardClick={handleFilmCardClick}
            handleFilmCardMouseOver={() => {
              this.setState({activeFilm: `film-${index}`});
            }}
          />)}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  handleFilmCardClick: PropTypes.func.isRequired
};

export default FilmList;

// onCardClick={(film.link) => history.push(`/${film.link}`)}