import { combineReducers } from 'redux';
import boardPostedTemplate from './boardPostedTemplate';
import content from './content';
import landing from './landing';
import signIn from './signIn';

const rootReducer = combineReducers({
    landing,
    signIn,
    boardPostedTemplate,
    content
})

export default rootReducer