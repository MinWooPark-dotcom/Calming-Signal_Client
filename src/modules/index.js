import { combineReducers } from 'redux';
import boardPostedTemplate from './boardPostedTemplate';
import content from './content';
import landing from './landing';
import signIn from './signIn';
import weather from './weather';

const rootReducer = combineReducers({
  landing,
  signIn,
  boardPostedTemplate,
  content,
  weather,
});

export default rootReducer;
