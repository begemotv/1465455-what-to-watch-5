import {createSelector} from "reselect";
import {NameSpace} from "../store/reducers";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getFilm = (state, id) => {
  return state[NameSpace.DATA].films.find((item) => item.id === id);
};

export const getFilmsFavorite = (state) => {
  return state[NameSpace.USER].filmsFavorite;
};

export const getFavoriteStatus = (state, id) => {
  return state[NameSpace.USER].filmsFavorite.some((item) => item.id === id);
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].filmReviews;
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

export const getGenreList = createSelector(getFilms, (films) => {
  let genreList = films
    .map((item) => item.genre)
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .slice(0, 9);

  genreList.unshift(`All genres`);

  return genreList;
});
