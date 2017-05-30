import { combineReducers } from 'redux';
import mathReducer from './questions';
export default combineReducers({
  math: mathReducer,
})
