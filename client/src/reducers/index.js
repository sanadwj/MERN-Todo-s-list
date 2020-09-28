import { combineReducers, compinedReducer } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer
});