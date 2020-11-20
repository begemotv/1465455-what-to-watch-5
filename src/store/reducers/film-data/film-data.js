import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  filmPromo: null,
  filmReviews: [],
  isFetching: false,
  isReviewFormBlocked: false,
  errorGetFilmList: false,
  errorGetFilmReviews: false,
  errorGetFilmPromo: false,
  errorGetFavorites: false,
  errorGetAuthorization: false,
  errorPostLogin: false,
  errorPostFilmReview: false,
  errorPostToFavorites: false,
};

export const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_ACTIVE_FILM_DETAILS_PROMO:
      return extend(state, {
        filmPromo: action.payload,
      });
    case ActionType.LOAD_ACTIVE_FILM_REVIEWS:
      return extend(state, {
        filmReviews: action.payload,
      });
    case ActionType.CHANGE_FETCHING_STATUS:
      return extend(state, {
        isFetching: action.payload,
      });
    case ActionType.CHANGE_REVIEW_FORM_STATUS:
      return extend(state, {
        isReviewFormBlocked: action.payload,
      });
    case ActionType.ERROR_GET_FILM_LIST:
      return extend(state, {
        errorGetFilmList: action.payload,
      });
    case ActionType.ERROR_GET_FILM_REVIEWS:
      return extend(state, {
        errorGetFilmReviews: action.payload,
      });
    case ActionType.ERROR_GET_FILM_PROMO:
      return extend(state, {
        errorGetFilmPromo: action.payload,
      });
    case ActionType.ERROR_GET_FILM_FAVORITES:
      return extend(state, {
        errorGetFavorites: action.payload,
      });
    case ActionType.ERROR_GET_FILM_AUTHORIZATION:
      return extend(state, {
        errorGetAuthorization: action.payload,
      });
    case ActionType.ERROR_POST_LOGIN:
      return extend(state, {
        errorPostLogin: action.payload,
      });
    case ActionType.ERROR_POST_FILM_REVIEW:
      return extend(state, {
        errorPostFilmReview: action.payload,
      });
    case ActionType.ERROR_POST_TO_FAVORITES:
      return extend(state, {
        errorPostToFavorites: action.payload,
      });
    default:
      return state;
  }
};
