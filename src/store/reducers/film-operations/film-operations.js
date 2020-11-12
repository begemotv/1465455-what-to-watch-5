import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  activeFilmId: 0,
  activeFilmIdGenre: ``,
  activeGenre: `All genres`,
};

export const filmOperations = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TAB_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
    case ActionType.CHANGE_ACTIVE_FILM_ID:
      return extend(state, {
        activeFilmId: action.payload
      });
    case ActionType.CHANGE_ACTIVE_FILM_GENRE:
      return extend(state, {
        activeFilmIdGenre: action.payload
      });
    default:
      return state;
  }
};
