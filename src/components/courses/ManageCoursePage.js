import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'

class ManageCoursesPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    }
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        course={this.state.course}
        errors={this.state.errors}
      />
    )
  }
}

ManageCoursesPage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  let course = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''}

  const authorsFormattedForDropdown = state.authors.map(author =>({
    value: author.id,
    text: `${author.firstName} ${author.lastName}`
  }))

  return {
    course,
    authors: authorsFormattedForDropdown
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage)
