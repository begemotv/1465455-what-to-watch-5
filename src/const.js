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

export const FILMS_INCREMENT_COUNT = 8;

export const DEFAULT_ID = 0;

export const DEFAULT_TAB = `Overview`;

export const ErrorMessage = {
  FETCH_FILM_REVIEWS_ERROR: `Failed fetching film reviews from server`,
  FETCH_FILM_PROMO_ERROR: `Failed fetching promo film from server`,
  LOGIN_ERROR: `Error on login`,
  POST_REVIEW_ERROR: `Failed posting review to server`,
  SERVER_ERROR: `Something went wrong on the server`,
};
