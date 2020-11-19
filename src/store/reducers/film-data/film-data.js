import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  activeFilmDetails: null,
  activeFilmDetailsPromo: null,
  activeFilmReviews: [],
  films: [],
  isFetching: true,
  isReviewFormBlocked: false,
};

export const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_ACTIVE_FILM_DETAILS:
      return extend(state, {
        activeFilmDetails: action.payload,
      });
    case ActionType.LOAD_ACTIVE_FILM_DETAILS_PROMO:
      return extend(state, {
        activeFilmDetailsPromo: action.payload,
      });
    case ActionType.LOAD_ACTIVE_FILM_REVIEWS:
      return extend(state, {
        activeFilmReviews: action.payload,
      });
    case ActionType.CHANGE_REVIEW_FORM_STATUS:
      return extend(state, {
        isReviewFormBlocked: action.payload,
      });
    default:
      return state;
  }
};
