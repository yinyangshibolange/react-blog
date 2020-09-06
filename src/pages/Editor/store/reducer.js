import * as types from './actionTypes';
// import { deepClone } from '../../../utils/objClone'
const defaultState = {
  plans: [ ],
	leveldict: []
}

export default (state = defaultState, action) => {
    // const newState = deepClone(state)
    switch(action.type) {
        case types.SET_FORM: 
            let tempobj = {}
            tempobj[action.key] = action.value
            return Object.assign({}, state, tempobj)
        default:
    }
    return state
}
