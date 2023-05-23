import React from "react";
import { Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from '../redux/actions/courseActions.jsx';
import * as authorActions from '../redux/actions/authorActions.jsx';
import PropTypes from 'prop-types';
import CourseList from "./CourseList.jsx";
import Spinner from "../Spinner.jsx";

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  }

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    // Load course
    if (courses.length === 0) {
      actions.loadCourses().catch( (error) => {
        alert("Loading course faile" + error);
      });
    }    
    // Load authors
    if (authors.length === 0) {
      actions.loadAuthors().catch( (error) => {
        alert("Loading authors faile" + error);
      });
    }  
  }

    render() {
        return (
          <>  
            {this.state.redirectToAddCoursePage && <Navigate to="/course" />}
            <h2>Courses</h2>
            <Spinner />
            <button
              style={{marginBottom: 20}}
              className="btn btn-primary add-course"
              onClick={() => this.setState({redirectToAddCoursePage: true})}
            >
              Add Course
            </button>
            <CourseList courses={this.props.courses} />
          </>
        )
    } 
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
      courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
    authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}


// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);