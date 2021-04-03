import { combineReducers } from 'redux';
import boardPostedTemplate from './boardPostedTemplate';
import landing from './landing';
import signIn from './signIn';

const rootReducer = combineReducers({
    landing,
    signIn,
    boardPostedTemplate
})

export default rootReducer