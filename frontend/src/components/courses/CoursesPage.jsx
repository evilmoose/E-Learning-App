import React from "react";
import { connect } from "react-redux";
import * as courseActions from '../redux/actions/courseActions.jsx';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {

        state = {
            course: {
                title: ""
            }
        };

    handleChange = event => {
        // copy the current course from state and then set the 'title' to a new value.
        const course = { ...this.state.course, title: event.target.value }; 
        this.setState({ course });  // Call set state and pass the new course.
      };

      handleSubmit = event => {
        event.preventDefault();
        {/*this.props.actions.createCourse(this.state.course);*/}
        this.props.dispatch(courseActions.createCourse(this.state.course))
      };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />
                <input type="submit" value="Save" />
                {this.props.courses.map(course => (
                <div key={course.title}>{course.title}</div>
        ))}
            </form>
        )
    } 
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
      courses: state.courses
    };
  }


// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps) (CoursesPage);