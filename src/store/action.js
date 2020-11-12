export const ActionType = {
  CHANGE_ACTIVE_FILM_ID: `CHANGE_ACTIVE_FILM_ID`,
  CHANGE_ACTIVE_FILM_GENRE: `CHANGE_ACTIVE_FILM_GENRE`,
  CHANGE_TAB_GENRE: `CHANGE_TAB_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
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

