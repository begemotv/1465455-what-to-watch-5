import {combineReducers} from "redux";
import {filmData} from "./film-data/film-data";
import {filmOperations} from "./film-operations/film-operations";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  OPERATIONS: `OPERATIONS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmData,
  [NameSpace.OPERATIONS]: filmOperations,
  [NameSpace.USER]: user,
});
