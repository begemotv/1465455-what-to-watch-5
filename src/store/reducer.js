import {extend} from "../utils";
import {ActionType} from "./action";
import filmsMock from "../mocks/films";

const initialState = {
  genre: `All genres`,
  films: filmsMock
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.FILTER_BY_GENRE:
      return extend(state, {
        films: action.payload
      });
    default:
      return state;
  }
};

