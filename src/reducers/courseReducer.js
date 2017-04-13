import * as types from '../actions/actionTypes'


export default function courseReducer(state = [], action) {
  switch(action.type){
    case types.CREATE_COURSE:
      return [
        ...state,
        Object.assign({}, action.course)
      ]
    case types.REMOVE_COURSE:
      return [
        ...state.filter(course => course.title !== action.course.title)
      ]
    default:
      return state
  }
}
