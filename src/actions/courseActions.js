import * as types from './actionTypes'

export const createCourse = course => (
  { type: types.CREATE_COURSE, course }
)

export const removeCourse = course => (
  { type: types.REMOVE_COURSE, course }
)
