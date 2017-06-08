import { combineReducers } from 'redux';
import subGroup from './subGroup';
import Group from './group';
import Canvas from './canvas';

export default combineReducers({
  sub: subGroup,
  main: Group,
  canvas: Canvas,
})
