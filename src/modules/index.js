import { combineReducers } from 'redux';
import boardPostedTemplate from './boardPostedTemplate';
import content from './content';
import signIn from './signIn';
import weather from './weather';

const rootReducer = combineReducers({
  signIn,
  boardPostedTemplate,
  content,
  weather,
});

export default rootReducer;
