import { combineReducers, createStore, applyMiddleware } from 'redux';
import mainReducer from './reducer';
import { reducer as editorReducer} from '../pages/Editor/store'
// import { reducer as homeReducer } from '../pages/Home/store'
// import { reducer as planReducer } from '../pages/Plan/store'
// import { reducer as planDetailReducer } from '../pages/Plan/Detail/store'
// import { reducer as createFormReducer } from '../pages/Plan/Creation/store'
// import { reducer as modifyFormReducer } from '../pages/Plan/Modify/store'
// import { reducer as personReducer } from '../pages/My/Person/store'
// import { reducer as messageReducer } from '../pages/Message/store'
// import { reducer as authReducer } from '../pages/Auth/store'
// import { reducer as sendReducer } from '../pages/Plan/Send/store'
// import { reducer as receiveReducer } from '../pages/Message/Receive/store'
// import { reducer as mountReducer } from '../pages/Plan/Mount/store'
import reduxThunk from 'redux-thunk'

const allReducer = combineReducers({
    editor: editorReducer,
    // main: mainReducer,
    // home: homeReducer,
    // plan: planReducer,
    // planDetail: planDetailReducer,
    // createForm: createFormReducer,
    // modifyForm: modifyFormReducer,
    // person: personReducer,
    // message: messageReducer,
    // auth: authReducer,
    // send: sendReducer,
    // receive: receiveReducer,
    // mount: mountReducer,
})

const store = createStore(allReducer, applyMiddleware(reduxThunk))

export default store
