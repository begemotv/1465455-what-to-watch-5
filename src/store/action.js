export const ActionType = {
  CHANGE_ACTIVE_FILM_ID: `CHANGE_ACTIVE_FILM_ID`,
  CHANGE_ACTIVE_FILM_GENRE: `CHANGE_ACTIVE_FILM_GENRE`,
  CHANGE_TAB_GENRE: `CHANGE_TAB_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_ACTIVE_FILM_DETAILS: `LOAD_ACTIVE_FILM_DETAILS`,
  LOAD_ACTIVE_FILM_REVIEWS: `LOAD_ACTIVE_FILM_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
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

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
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

export const loadActiveFilmDetails = (film) => ({
  type: ActionType.LOAD_ACTIVE_FILM_DETAILS,
  payload: film,
});

export const loadActiveFilmReviews = (reviews) => ({
  type: ActionType.LOAD_ACTIVE_FILM_REVIEWS,
  payload: reviews,
});
