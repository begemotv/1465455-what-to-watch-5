import {MOVIES_INCREMENT_COUNT} from "../const";

export const ActionType = {
  CHANGE_ACTIVE_FILM_ID: `CHANGE_ACTIVE_FILM_ID`,
  CHANGE_ACTIVE_FILM_GENRE: `CHANGE_ACTIVE_FILM_GENRE`,
  CHANGE_TAB_GENRE: `CHANGE_TAB_GENRE`,
  CHANGE_ACTIVE_USER_DATA: `CHANGE_ACTIVE_USER_DATA`,
  CHANGE_REVIEW_FORM_STATUS: `CHANGE_REVIEW_FORM_STATUS`,
  CHANGE_FETCHING_STATUS: `CHANGE_FETCHING_STATUS`,
  ERROR_GET_FILM_LIST: `ERROR_GET_FILM_LIST`,
  ERROR_GET_FILM_REVIEWS: `ERROR_GET_FILM_REVIEWS`,
  ERROR_GET_FILM_PROMO: `ERROR_GET_FILM_PROMO`,
  ERROR_GET_FILM_FAVORITES: `ERROR_GET_FILM_FAVORITES`,
  ERROR_GET_FILM_AUTHORIZATION: `ERROR_GET_FILM_AUTHORIZATION`,
  ERROR_POST_LOGIN: `ERROR_POST_LOGIN`,
  ERROR_POST_FILM_REVIEW: `ERROR_POST_FILM_REVIEW`,
  ERROR_POST_TO_FAVORITES: `ERROR_POST_TO_FAVORITES`,
  INCREMENT_MOVIE_CARDS_SHOWN_COUNT: `INCREMENT_MOVIE_CARDS_SHOWN_COUNT`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILMS_FAVORITE: `LOAD_FILMS_FAVORITE`,
  LOAD_ACTIVE_FILM_DETAILS_PROMO: `LOAD_ACTIVE_FILM_DETAILS_PROMO`,
  LOAD_ACTIVE_FILM_REVIEWS: `LOAD_ACTIVE_FILM_REVIEWS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  RESET_MOVIE_CARDS_SHOWN_COUNT: `RESET_MOVIE_CARDS_SHOWN_COUNT`,
};

export const changeActiveFilmId = (id) => ({
  type: ActionType.CHANGE_ACTIVE_FILM_ID,
  payload: id,
});

export const changeActiveFilmIdGenre = (genre) => ({
  type: ActionType.CHANGE_ACTIVE_FILM_GENRE,
  payload: genre
});

export const changeTabGenre = (genre) => ({
  type: ActionType.CHANGE_TAB_GENRE,
  payload: genre
});

export const changeActiveUserData = (data) => ({
  type: ActionType.CHANGE_ACTIVE_USER_DATA,
  payload: data
});

export const changeReviewFormStatus = (status) => ({
  type: ActionType.CHANGE_REVIEW_FORM_STATUS,
  payload: status
});

export const changeFetchingStatus = (status) => ({
  type: ActionType.CHANGE_FETCHING_STATUS,
  payload: status
});

export const incrementMovieCardsShownCount = () => ({
  type: ActionType.INCREMENT_MOVIE_CARDS_SHOWN_COUNT,
  payload: MOVIES_INCREMENT_COUNT
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadFilmsFavorite = (films) => ({
  type: ActionType.LOAD_FILMS_FAVORITE,
  payload: films,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadfilmReviews = (reviews) => ({
  type: ActionType.LOAD_ACTIVE_FILM_REVIEWS,
  payload: reviews,
});

export const loadfilmPromo = (film) => ({
  type: ActionType.LOAD_ACTIVE_FILM_DETAILS_PROMO,
  payload: film,
});

export const resetMovieCardsShownCount = () => ({
  type: ActionType.RESET_MOVIE_CARDS_SHOWN_COUNT,
  payload: MOVIES_INCREMENT_COUNT,
});

export const throwErrorGetFilmList = (status) => ({
  type: ActionType.ERROR_GET_FILM_LIST,
  payload: status,
});

export const throwErrorGetFilmReviews = (status) => ({
  type: ActionType.ERROR_GET_FILM_REVIEWS,
  payload: status,
});

export const throwErrorGetFilmPromo = (status) => ({
  type: ActionType.ERROR_GET_FILM_PROMO,
  payload: status,
});

export const throwErrorGetFavorites = (status) => ({
  type: ActionType.ERROR_GET_FILM_FAVORITES,
  payload: status,
});

export const throwErrorGetAuthorization = (status) => ({
  type: ActionType.ERROR_GET_FILM_AUTHORIZATION,
  payload: status,
});

export const throwErrorPostLogin = (status) => ({
  type: ActionType.ERROR_POST_LOGIN,
  payload: status,
});

export const throwErrorPostFilmReview = (status) => ({
  type: ActionType.ERROR_POST_FILM_REVIEW,
  payload: status,
});

export const throwErrorPostToFavorites = (status) => ({
  type: ActionType.ERROR_POST_TO_FAVORITES,
  payload: status,
});
