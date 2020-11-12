import {loadFilms} from "../action";
import {adaptFilmToClient} from "../../services/adapter";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      let adaptedFilms = data.map((film) => adaptFilmToClient(film));
      dispatch(loadFilms(adaptedFilms));
    })
);

