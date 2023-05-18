import {useEffect} from "react";
import { connect } from "react-redux";
import {loadCourses} from '../redux/actions/courseActions.jsx';
import {loadAuthors} from '../redux/actions/authorActions.jsx';
import PropTypes from 'prop-types';

 function ManageCoursePage({courses, authors, loadAuthors, loadCourses}) {
    useEffect(() => {
    
    console.log(courses.length);
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
  }, []);

    return (
        <>  
            <h2>Manage Course</h2>
        </>
    )
} 

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors
}


// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps) (ManageCoursePage);