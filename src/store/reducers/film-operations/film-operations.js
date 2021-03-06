import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {FILMS_INCREMENT_COUNT, DEFAULT_ID, DEFAULT_TAB} from "../../../const";

const initialState = {
  activeFilmId: DEFAULT_ID,
  activeFilmIdGenre: ``,
  activeGenre: `All genres`,
  activeTab: DEFAULT_TAB,
  filmCardsShownCount: FILMS_INCREMENT_COUNT,
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
    case ActionType.CHANGE_ACTIVE_TAB:
      return extend(state, {
        activeTab: action.payload
      });
    case ActionType.INCREMENT_FILM_CARDS_SHOWN_COUNT:
      return extend(state, {
        filmCardsShownCount: state.filmCardsShownCount + action.payload
      });
    case ActionType.RESET_FILM_CARDS_SHOWN_COUNT:
      return extend(state, {
        filmCardsShownCount: action.payload
      });
    case ActionType.RESET_ACTIVE_TAB:
      return extend(state, {
        activeTab: action.payload
      });
    default:
      return state;
  }
};
