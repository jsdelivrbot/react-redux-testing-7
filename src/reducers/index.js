import { combineReducers } from 'redux';
import commentsReducer from './commentReducer';

const rootReducer = combineReducers({
	//had to change this from object to array???to make the test work?
  comments: commentsReducer
});

export default rootReducer;
