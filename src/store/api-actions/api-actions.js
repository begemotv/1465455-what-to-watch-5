import {loadFilms, requireAuthorization, redirectToRoute} from "../action";
import {adaptFilmToClient} from "../../services/adapter";
import {APIRoute, AppRoute, AuthorizationStatus} from "../../const";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      const adaptedFilms = data.map((film) => adaptFilmToClient(film));
      dispatch(loadFilms(adaptedFilms));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
