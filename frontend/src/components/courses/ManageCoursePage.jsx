import {useEffect, useState} from "react";
import { connect } from "react-redux";
import {loadCourses} from '../redux/actions/courseActions.jsx';
import {loadAuthors} from '../redux/actions/authorActions.jsx';
import PropTypes from 'prop-types';
import CourseForm from "./CourseForm.jsx"
import mockData from "../../../tools/mockData.js"

 // eslint-disable-next-line react-refresh/only-export-components
 function ManageCoursePage({
    courses, 
    authors, 
    loadAuthors, 
    loadCourses, 
    ...props
}) {
    
    const [course, setCourse] = useState({...props.course});
    const [errors, setErrors] = useState({});

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
        <CourseForm course={course} errors={errors} authors={authors} />
    )
} 

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        course: mockData.newCourse,
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