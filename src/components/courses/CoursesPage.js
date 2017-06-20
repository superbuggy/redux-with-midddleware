import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {courses} = this.props

    return (
      <div>
        <h1>{'Courses'}</h1>
        <CourseList courses={courses} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
