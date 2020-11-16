import reviews from "../../../mocks/reviews";
import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  activeFilmDetails: {},
  activeFilmReviews: [],
  films: [],
  reviewsAll: reviews,
};

export const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviewsAll: action.payload,
      });
    case ActionType.LOAD_ACTIVE_FILM_DETAILS:
      return extend(state, {
        activeFilmDetails: action.payload,
      });
    case ActionType.LOAD_ACTIVE_FILM_REVIEWS:
      return extend(state, {
        activeFilmReviews: action.payload,
      });
    default:
      return state;
  }
};
