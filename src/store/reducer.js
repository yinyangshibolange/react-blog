import * as types from './actionTypes'
const defaultState = {
    isStatusBarShow: false, //固定属性
    userId: null,
    accessToken: null,
    // isLogin: false
}
export default function (state = defaultState, action) {
    switch (action.type) {
        case types.SET_FORM:
            let updateObj = {}
            updateObj[action.key] = action.value
            return Object.assign({}, state, updateObj)
        default:
    }
    return state
}