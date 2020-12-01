import {FILMS_INCREMENT_COUNT, DEFAULT_TAB} from "../const";

export const ActionType = {
  CHANGE_ACTIVE_FILM_ID: `CHANGE_ACTIVE_FILM_ID`,
  CHANGE_ACTIVE_FILM_GENRE: `CHANGE_ACTIVE_FILM_GENRE`,
  CHANGE_TAB_GENRE: `CHANGE_TAB_GENRE`,
  CHANGE_ACTIVE_USER_DATA: `CHANGE_ACTIVE_USER_DATA`,
  CHANGE_ACTIVE_TAB: `CHANGE_ACTIVE_TAB`,
  CHANGE_REVIEW_FORM_STATUS: `CHANGE_REVIEW_FORM_STATUS`,
  CHANGE_FETCHING_STATUS: `CHANGE_FETCHING_STATUS`,
  INCREMENT_FILM_CARDS_SHOWN_COUNT: `INCREMENT_FILM_CARDS_SHOWN_COUNT`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILMS_FAVORITE: `LOAD_FILMS_FAVORITE`,
  LOAD_ACTIVE_FILM_DETAILS_PROMO: `LOAD_ACTIVE_FILM_DETAILS_PROMO`,
  LOAD_ACTIVE_FILM_REVIEWS: `LOAD_ACTIVE_FILM_REVIEWS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  RESET_FILM_CARDS_SHOWN_COUNT: `RESET_FILM_CARDS_SHOWN_COUNT`,
  RESET_ACTIVE_TAB: `RESET_ACTIVE_TAB`,
};

export const changeActiveFilmId = (id) => ({
  type: ActionType.CHANGE_ACTIVE_FILM_ID,
  payload: id,
});

export const changeActiveFilmGenre = (genre) => ({
  type: ActionType.CHANGE_ACTIVE_FILM_GENRE,
  payload: genre
});

export const changeActiveTab = (activeTab) => ({
  type: ActionType.CHANGE_ACTIVE_TAB,
  payload: activeTab
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

export const incrementfilmCardsShownCount = () => ({
  type: ActionType.INCREMENT_FILM_CARDS_SHOWN_COUNT,
  payload: FILMS_INCREMENT_COUNT
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

export const resetfilmCardsShownCount = () => ({
  type: ActionType.RESET_FILM_CARDS_SHOWN_COUNT,
  payload: FILMS_INCREMENT_COUNT,
});

export const resetActiveTab = () => ({
  type: ActionType.RESET_ACTIVE_TAB,
  payload: DEFAULT_TAB
});
