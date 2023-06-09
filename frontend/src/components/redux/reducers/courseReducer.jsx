import { 
  CREATE_COURSE_SUCCESS, 
  LOAD_COURSES_SUCCESS, 
  UPDATE_COURSE_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];  //return updated copy of state
    case UPDATE_COURSE_SUCCESS: 
      return state.map(course => course.id === action.course.id ? action.course : course);
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
}
}