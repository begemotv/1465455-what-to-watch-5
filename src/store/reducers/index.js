import {combineReducers} from "redux";
import {filmData} from "./film-data/film-data";
import {filmOperations} from "./film-operations/film-operations";

export const NameSpace = {
  DATA: `DATA`,
  OPERATIONS: `OPERATIONS`
};

export default combineReducers({
  [NameSpace.DATA]: filmData,
  [NameSpace.OPERATIONS]: filmOperations
});
