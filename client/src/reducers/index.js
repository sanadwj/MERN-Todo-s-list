import { combineReducers, compinedReducer } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer
});