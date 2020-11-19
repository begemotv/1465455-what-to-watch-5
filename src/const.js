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
};

export const APIRoute = {
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
