import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as courseActions from '../../actions/courseActions'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: { title: '' }
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onTitleChange(event) {
    const course = this.state.course
    course.title = event.target.value
    this.setState({course})
  }

  onClickSave(event) {
    this.props.dispatch(courseActions.createCourse(this.state.course))
  }
  courseRow(course, index){
    return <div key={index}>{course.title}</div>
  }
  render() {
    return (
      <div>
        <h1>{'Courses'}</h1>
        {this.props.courses.map(this.courseRow)}
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}/>

        <input
          type="submit"
          onClick={this.onClickSave}
          value={'Save'} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  disptach: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}
// function mapDispatchToProps(){}

export default connect(mapStateToProps/*, mapDispatchToProps*/)(CoursesPage)
