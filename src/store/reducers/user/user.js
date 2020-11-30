import {extend} from "../../../utils";
import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  activeUser: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  filmsFavorite: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_USER_DATA:
      return extend(state, {
        activeUser: action.payload,
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_FILMS_FAVORITE:
      return extend(state, {
        filmsFavorite: action.payload,
      });
    default:
      return state;
  }
};

export {user};
