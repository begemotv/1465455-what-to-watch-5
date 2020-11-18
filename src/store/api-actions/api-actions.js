import {loadFilms, requireAuthorization, redirectToRoute, loadActiveFilmDetails, loadActiveFilmReviews, loadActiveFilmDetailsPromo, changeActiveUserData} from "../action";
import {adaptFilmToClient, adaptReviewToClient, adaptUserToClient} from "../../services/adapter";
import {APIRoute, AppRoute, AuthorizationStatus} from "../../const";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      const adaptedFilms = data.map((film) => adaptFilmToClient(film));
      dispatch(loadFilms(adaptedFilms));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}${id}`)
    .then(({data}) => {
      const adaptedFilm = adaptFilmToClient(data);
      dispatch(loadActiveFilmDetails(adaptedFilm));
    })
);

export const fetchFilmReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({data}) => {
      const adaptedReviews = data.map((review) => adaptReviewToClient(review));
      dispatch(loadActiveFilmReviews(adaptedReviews));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      const adaptedPromoFilm = adaptFilmToClient(data);
      dispatch(loadActiveFilmDetailsPromo(adaptedPromoFilm));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      const adaptedUser = adaptUserToClient(data);
      dispatch(changeActiveUserData(adaptedUser));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const postFilmReview = (id, comment, rating) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}${id}`, {rating, comment})
   .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}${id}`)))
);
