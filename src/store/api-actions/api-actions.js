import {loadFilms, loadFilmsFavorite, requireAuthorization, redirectToRoute, loadfilmReviews, loadfilmPromo, changeActiveUserData, changeActiveFilmId, changeReviewFormStatus, throwErrorGetFavorites} from "../action";
import {adaptFilmToClient, adaptReviewToClient, adaptUserToClient} from "../../services/adapter";
import {ApiRoute, AppRoute, AuthorizationStatus} from "../../const";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FILMS)
    .then(({data}) => {
      const adaptedFilms = data.map((film) => adaptFilmToClient(film));
      dispatch(loadFilms(adaptedFilms));
    })
);

export const fetchFilmReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}${id}`)
    .then(({data}) => {
      const adaptedReviews = data.map((review) => adaptReviewToClient(review));
      dispatch(loadfilmReviews(adaptedReviews));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.PROMO)
    .then(({data}) => {
      const adaptedPromoFilm = adaptFilmToClient(data);
      dispatch(loadfilmPromo(adaptedPromoFilm));
      dispatch(changeActiveFilmId(adaptedPromoFilm.id));
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITE)
    .then(({data}) => {
      const adaptedFilmsFavorite = data.map((film) => adaptFilmToClient(film));
      dispatch(loadFilmsFavorite(adaptedFilmsFavorite));
    })
    .catch((err) => {
      dispatch(throwErrorGetFavorites(true));
      throw err;
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      const adaptedUser = adaptUserToClient(data);
      dispatch(changeActiveUserData(adaptedUser));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(fetchFavoriteFilmList()))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(() => dispatch(checkAuth()))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const postFilmReview = (id, comment, rating) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.COMMENTS}${id}`, {rating, comment})
   .then(() => dispatch(changeReviewFormStatus(false)))
   .then(() => dispatch(redirectToRoute(`${ApiRoute.FILMS}${id}`)))
);

export const addToFavorites = (id, status) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.FAVORITE}${id}/${status}`)
   .then(() => dispatch(fetchFavoriteFilmList()))
);
