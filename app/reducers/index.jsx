import { combineReducers } from 'redux';
import subGroup from './subGroup';
import Group from './group';
export default combineReducers({
  sub: subGroup,
  main: Group,
})
