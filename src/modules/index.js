import { combineReducers } from 'redux';
import landing from './landing';
import signIn from './signIn';

const rootReducer = combineReducers({
    landing,
    signIn
})

export default rootReducer