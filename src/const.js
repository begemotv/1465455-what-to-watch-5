export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  FILMS: `/films/`,
  FILMS_ID: `/films/:id`,
  FILMS_ID_REVIEW: `/films/:id/review`,
  LOGIN: `/login`,
  MYLIST: `/mylist`,
  PLAYER: `/player/`,
  PLAYER_ID: `/player/:id`,
  REVIEW: `/review`,
  ROOT: `/`,
  SERVER_ERROR: `/error`,
};

export const ApiRoute = {
  COMMENTS: `/comments/`,
  FAVORITE: `/favorite/`,
  FILMS: `/films/`,
  LOGIN: `/login`,
  PROMO: `/films/promo`,
};

export const ReviewLength = {
  MIN: 50,
  MAX: 400,
};

export const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const MOVIES_INCREMENT_COUNT = 8;

export const DEFAULT_ID = 0;

export const ErrorMessage = {
  BAD_REQUEST: `Server received a bad request`,
  CHECK_AUTHORIZATION_ERROR: `Failed checking authorization on server`,
  FETCH_FILM_LIST_ERROR: `Failed fetching film list from server`,
  FETCH_FILM_REVIEWS_ERROR: `Failed fetching film reviews from server`,
  FETCH_FILM_PROMO_ERROR: `Failed fetching promo film from server`,
  FETCH_FILM_LIST_FAVORITE_ERROR: `Failed fetching favorites film list from server`,
  GENERIC: `Something went wrong`,
  LOGIN_ERROR: `Error on login`,
  NOT_FOUND: `Page was not found`,
  POST_REVIEW_ERROR: `Failed posting review to server`,
  POST_TO_FAVORITES_ERROR: `Failed posting film to favorites on server`,
  SERVER_ERROR: `Something went wrong on the server`,
  UNAUTHORIZED: `User was not authorized`,
};
