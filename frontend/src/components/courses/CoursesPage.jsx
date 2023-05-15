import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from '../redux/actions/courseActions.jsx';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {

    render() {
        return (
          <>  
            <h2>Courses</h2>
              {this.props.courses.map(course => (
            <div key={course.title}>{course.title}</div>
        ))}
          </>
        )
    } 
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
      courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}


// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);