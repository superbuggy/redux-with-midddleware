import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
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
    this.onClickRemove = this.onClickRemove.bind(this)
  }

  onTitleChange(event) {
    const course = this.state.course
    course.title = event.target.value
    this.setState({course})
  }

  onClickSave(event) {
    this.props.actions.createCourse(this.state.course)
  }

  onClickRemove(event) {
    this.props.actions.removeCourse(this.state.course)
  }

  render() {
    let context = this
    let rows = this.props.courses.map( (course, index) => (
      <div key={index}>{course.title}
        <button className={'btn'} onClick={context.onClickRemove}>x</button>
      </div>
    ) )
    return (
      <div>
        <h1>{'Courses'}</h1>
        {rows}
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}/>

        <input
          className={'btn'}
          type="submit"
          onClick={this.onClickSave}
          value={'Save'} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
