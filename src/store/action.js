import {filterFilmsByGenre} from "../core";

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_BY_GENRE: `FILTER_BY_GENRE`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  filterByGenre: (genre, id) => {
    const genreFilms = filterFilmsByGenre(genre, id);

    return {
      type: ActionType.FILTER_BY_GENRE,
      payload: genreFilms
    };
  }
};
