import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  filmPromo: null,
  filmReviews: [],
  isFetching: false,
  isReviewFormBlocked: false,
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
    default:
      return state;
  }
};
