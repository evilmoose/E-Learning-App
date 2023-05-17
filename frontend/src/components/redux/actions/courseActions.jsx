import {CREATE_COURSE, LOAD_COURSES_SUCCESS} from "./actionTypes.jsx";
import * as courseApi from "../../../api/courseApi.js"

export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}