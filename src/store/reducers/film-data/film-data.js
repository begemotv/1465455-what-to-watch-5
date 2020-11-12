import reviews from "../../../mocks/reviews";
import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  filmsAll: [],
  reviewsAll: reviews,
};

export const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        filmsAll: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviewsAll: action.payload,
      });
    default:
      return state;
  }
};