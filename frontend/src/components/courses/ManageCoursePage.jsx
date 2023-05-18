import React from "react";
import { connect } from "react-redux";
import * as courseActions from '../redux/actions/courseActions.jsx';
import * as authorActions from '../redux/actions/authorActions.jsx';
import PropTypes from 'prop-types';

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;
    // Load course
    if (courses.length === 0) {
      loadCourses().catch( (error) => {
        alert("Loading course faile" + error);
      });
    }    
    // Load authors
    if (authors.length === 0) {
      loadAuthors().catch( (error) => {
        alert("Loading authors faile" + error);
      });
    }  
  }

    render() {
        return (
          <>  
            <h2>Manage Course</h2>
          </>
        )
    } 
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.course,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses: courseActions.loadCourses,
    loadAuthors: authorActions.loadAuthors
}


// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps) (ManageCoursePage);