import {toast} from "react-toastify";

import {loadFilms, loadFilmsFavorite, requireAuthorization, redirectToRoute, loadfilmReviews, loadfilmPromo, changeActiveUserData, changeActiveFilmId, changeReviewFormStatus, changeFetchingStatus} from "../action";
import {adaptFilmToClient, adaptReviewToClient, adaptUserToClient} from "../../services/adapter";
import {ApiRoute, AppRoute, AuthorizationStatus, ErrorMessage} from "../../const";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FILMS)
    .then(({data}) => {
      const adaptedFilms = data.map((film) => adaptFilmToClient(film));
      dispatch(loadFilms(adaptedFilms));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.SERVER_ERROR)))
);

export const fetchFilmReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}${id}`)
    .then((data) => {
      dispatch(changeFetchingStatus(true));
      return data;
    })
    .then(({data}) => {
      const adaptedReviews = data.map((review) => adaptReviewToClient(review));
      dispatch(loadfilmReviews(adaptedReviews));
    })
    .then(() => dispatch(changeFetchingStatus(false)))
    .catch(() => {
      toast.error(ErrorMessage.FETCH_FILM_REVIEWS_ERROR);
      dispatch(changeFetchingStatus(false));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.PROMO)
    .then(({data}) => {
      const adaptedPromoFilm = adaptFilmToClient(data);
      dispatch(loadfilmPromo(adaptedPromoFilm));
      dispatch(changeActiveFilmId(adaptedPromoFilm.id));
    })
    .catch(() => toast.error(ErrorMessage.FETCH_FILM_PROMO_ERROR))
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITE)
    .then(({data}) => {
      const adaptedFilmsFavorite = data.map((film) => adaptFilmToClient(film));
      dispatch(loadFilmsFavorite(adaptedFilmsFavorite));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.SERVER_ERROR)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      const adaptedUser = adaptUserToClient(data);
      dispatch(changeActiveUserData(adaptedUser));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(fetchFavoriteFilmList()))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(() => dispatch(checkAuth()))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => toast.error(ErrorMessage.LOGIN_ERROR))
);

export const postFilmReview = (id, comment, rating) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.COMMENTS}${id}`, {rating, comment})
   .then(() => dispatch(changeReviewFormStatus(false)))
   .then(() => dispatch(fetchFilmReviews(id)))
   .then(() => dispatch(redirectToRoute(`${ApiRoute.FILMS}${id}`)))
   .catch(() => {
     toast.error(ErrorMessage.POST_REVIEW_ERROR);
     dispatch(changeReviewFormStatus(false));
   })
);

export const addToFavorites = (id, status) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.FAVORITE}${id}/${status}`)
   .then(() => dispatch(fetchFavoriteFilmList()))
   .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);
