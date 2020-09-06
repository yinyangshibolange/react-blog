import * as types from './actionTypes'
export const setForm = (key, value) => {
  return {
    type: types.SET_FORM,
    key,
    value
  }
}