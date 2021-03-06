import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import ErrorPopup from "../error-popup/error-popup";
import FilmList from "../film-list/film-list";
import Footer from "../footer/footer";
import Header from "../header/header";
import MyListButton from "../my-list-button/my-list-button";
import PlayButton from "../play-button/play-button";
import TabBar from "../tab-bar/tab-bar";
import {AppRoute, AuthorizationStatus} from "../../const";
import {filmPropTypes} from "../../prop-types";
import {getMoreLikeFilms, getFilm} from "../../store/selectors";
import {NameSpace} from "../../store/reducers";
import {changeActiveFilmId, changeActiveFilmGenre} from "../../store/action";

const FilmScreen = (props) => {

  useEffect(() => {
    if (props.moreLikeFilms.length === 0) {
      const {changeActiveFilmAction, film: {genre, id}} = props;
      changeActiveFilmAction(id, genre);
    }
  }, []);

  const {
    authorizationStatus,
    film: {
      backgroundColor,
      backgroundImage,
      genre,
      id,
      name,
      poster,
      releaseYear
    },
    film,
    handlePlayButtonClick,
    moreLikeFilms,
  } = props;

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: `${backgroundColor}`}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton id={id} onPlayButtonClick={handlePlayButtonClick} />
                <MyListButton id={id} />
                {
                  authorizationStatus === AuthorizationStatus.AUTH
                      && <Link to={`${AppRoute.FILMS}${id}${AppRoute.REVIEW}`} className="btn movie-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={poster}
                alt={`${name} poster`}
                width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabBar film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={moreLikeFilms}/>
        </section>
        <Footer />
      </div>
      <ErrorPopup />
    </React.Fragment>
  );
};

FilmScreen.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  changeActiveFilmAction: PropTypes.func.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired,
  handlePlayButtonClick: PropTypes.func.isRequired,
  moreLikeFilms: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ),
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  const idInteger = Number.parseInt(id, 10);

  return ({
    authorizationStatus: state[NameSpace.USER].authorizationStatus,
    film: getFilm(state, idInteger),
    moreLikeFilms: getMoreLikeFilms(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilmAction(id, genre) {
    dispatch(changeActiveFilmId(id));
    dispatch(changeActiveFilmGenre(genre));
  },
});

export {FilmScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);
