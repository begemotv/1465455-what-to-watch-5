import {extend} from "../utils";
import {ActionType} from "./action";
import filmsMock from "../mocks/films";

const initialState = {
  activeGenre: `All genres`,
  filmsAll: filmsMock,
  filmsByGenre: filmsMock
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
    case ActionType.FILTER_BY_GENRE:
      return extend(state, {
        filmsByGenre: action.payload
      });
    default:
      return state;
  }
};

