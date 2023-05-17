import { LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes.jsx"; 
import initialState from "./initialState.jsx";

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
