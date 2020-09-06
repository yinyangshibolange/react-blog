import * as types from './actionTypes';
// import { deepClone } from '../../../utils/objClone'
const defaultState = {
  plans: [
  //   {
  //   id: "0001",
  //   name: "计划1",
  //   creator: "00012",
  //   creatorTime: "20190301",
  //   planStartTime: "20190302",
  //   planEndTime: "20190304",
  //   realStartTime: "",
  //   realEndTime: "",
  //   description: "没有什么描述",
  //   level: "1",
  //   status: "1",
  //   recentChangeTime: "20190303"
  // },{
  //   id: "0002",
  //   name: "计划2",
  //   creator: "00012",
  //   creatorTime: "20190301",
  //   planStartTime: "20190404",
  //   planEndTime: "20190405",
  //   realStartTime: "",
  //   realEndTime: "",
  //   description: "没有什么描述",
  //   level: "4",
  //   status: "1",
  //   recentChangeTime: "20190303"
  // },{
  //   id: "0003",
  //   name: "计划3",
  //   creator: "00012",
  //   creatorTime: "20190301",
  //   planStartTime: "20190302",
  //   planEndTime: "20190414",
  //   realStartTime: "",
  //   realEndTime: "",
  //   description: "没有什么描述",
  //   level: "3",
  //   status: "1",
  //   recentChangeTime: "20190303"
  // },{
  //   id: "0004",
  //   name: "计划4",
  //   creator: "00012",
  //   creatorTime: "20190301",
  //   planStartTime: "20190302",
  //   planEndTime: "20190402",
  //   realStartTime: "",
  //   realEndTime: "",
  //   description: "没有什么描述",
  //   level: "2",
  //   status: "1",
  //   recentChangeTime: "20190303"
  // }
  // CREATETIME: "20190429"
  // CREATORAVATOR: null
  // CREATORNAME: "hongyu"
  // DESCRIPTION: null
  // ID: "1"
  // LV: "0"
  // NAME: "干啥干啥"
  // STATUS: "0"
],
	leveldict: [{
		key: '1',
		value: '很紧急'
	},{
		key: '2',
		value: '紧急'
	},{
		key: '3',
		value: '不紧急'
	},{
		key: '4',
		value: '很不紧急'
	}]
}

export default reducer = function (state = defaultState, action) {
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
