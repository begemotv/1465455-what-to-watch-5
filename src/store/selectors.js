import {createSelector} from "reselect";
import {NameSpace} from "../store/reducers";

export const getFilms = (state) => {
  return state[NameSpace.DATA].filmsAll;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviewsAll;
};

const getActiveGenre = (state) => {
  return state[NameSpace.OPERATIONS].activeGenre;
};

const getActiveFilmId = (state) => {
  return state[NameSpace.OPERATIONS].activeFilmId;
};

const getActiveFilmIdGenre = (state) => {
  return state[NameSpace.OPERATIONS].activeFilmIdGenre;
};

export const getFilmsByGenre = createSelector(getFilms, getActiveGenre, getActiveFilmId, (filmsAll, activeGenre, activeFilmId) => {
  let genreFilms = filmsAll.filter((item) => item.id !== activeFilmId);

  if (activeGenre !== `All genres`) {
    genreFilms = genreFilms
    .filter((item) => activeGenre.includes(item.genre));
  }

  return genreFilms;
});

export const getMoreLikeFilms = createSelector(getFilms, getActiveFilmId, getActiveFilmIdGenre, (filmsAll, activeFilmId, activeFilmIdGenre) => {
  return filmsAll
    .filter((item) => item.id !== activeFilmId)
    .filter((item) => activeFilmIdGenre.includes(item.genre))
    .slice(0, 4);
});

