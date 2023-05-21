import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {loadCourses, saveCourse} from '../redux/actions/courseActions.jsx';
import {loadAuthors} from '../redux/actions/authorActions.jsx';
import PropTypes from 'prop-types';
import CourseForm from "./CourseForm.jsx"
import mockData from "../../../tools/mockData.js";

 // eslint-disable-next-line react-refresh/only-export-components
 function ManageCoursePage({
    courses, 
    authors, 
    loadAuthors, 
    loadCourses, 
    saveCourse,
    history,
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
        else {
            setCourse({...props.course})
        }    
        // Load authors
        if (authors.length === 0) {
            loadAuthors().catch( (error) => {
                alert("Loading authors faile" + error);
            });
        }  
    }, [props.course]);

    function handleChange(event) {
        const { name, value } = event.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }));
    }
    
    function handleSave(event) {
        event.preventDefault();
        saveCourse(course).then(() => {
            console.log(history)
        });
    }

    return (
        <CourseForm 
            course={course} 
            errors={errors} 
            authors={authors} 
            onChange={handleChange} 
            onSave={handleSave}
        />
    )
} 

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired
};

export function getCourseBySlug(courses, slug) {
    return courses.find(course => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
    const slug = ownProps.match;    // I get a params not found erro with ownProps.match.params.slug
    const course = 
        slug && state.courses.length > 0 
            ? getCourseBySlug(state.courses, slug) 
            : mockData.newCourse

    return {
        course,
        courses: state.courses,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors,
    saveCourse
}


// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps) (ManageCoursePage);