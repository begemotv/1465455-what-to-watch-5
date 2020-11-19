import {createSelector} from "reselect";
import {NameSpace} from "../store/reducers";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getFilmsFavorite = (state) => {
  return state[NameSpace.USER].filmsFavorite;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviewsAll;
};

const getActiveGenre = (state) => {
  return state[NameSpace.OPERATIONS].activeGenre;
};

export const getActiveFilmId = (state) => {
  return state[NameSpace.OPERATIONS].activeFilmId;
};

const getActiveFilmIdGenre = (state) => {
  return state[NameSpace.OPERATIONS].activeFilmIdGenre;
};

export const getFilmsByGenre = createSelector(getFilms, getActiveGenre, getActiveFilmId, (films, activeGenre, activeFilmId) => {
  let genreFilms = films.filter((item) => item.id !== activeFilmId);

  if (activeGenre !== `All genres`) {
    genreFilms = genreFilms
    .filter((item) => activeGenre.includes(item.genre));
  }

  return genreFilms;
});

export const getMoreLikeFilms = createSelector(getFilms, getActiveFilmId, getActiveFilmIdGenre, (films, activeFilmId, activeFilmIdGenre) => {
  return films
    .filter((item) => item.id !== activeFilmId)
    .filter((item) => activeFilmIdGenre.includes(item.genre))
    .slice(0, 4);
});

export const checkFilmFavorite = createSelector(getFilmsFavorite, getActiveFilmId, (filmsFavorite, activeFilmId) => {
  return filmsFavorite.some((film) => film.id === activeFilmId);
});
