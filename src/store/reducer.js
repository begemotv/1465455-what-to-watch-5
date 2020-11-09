<<<<<<< HEAD
import {extend} from "../utils";
import {ActionType} from "./action";
import questions from "../mocks/questions";

const initialState = {
  mistakes: 0,
  step: 0,
  questions,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      return extend(state, {
        step: nextStep,
      });

    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.RESET_GAME:
      return extend({}, initialState);
  }

  return state;
};


export {reducer};
||||||| 26e337e
=======
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

>>>>>>> ee660ffdecdc90dda74bb9322862d801d49f6796
