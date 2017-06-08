import {SET_TEXT, SET_COOR} from '../constants';

const initialState = {
  info: '',
  x: -1000,
  y: -10,
}


export default function(state=initialState, action){
  const newState = Object.assign({}, state);
  switch(action.type) {
    case SET_TEXT:
      newState.info = action.info;
      break;
    case SET_COOR:
      newState.x = action.x;
      newState.y = action.y;
      break;
    default:
      return state;
  }
  return newState;
}

export const setText = (info) => ({
  type: SET_TEXT,
  info
})

export const setCoor = (x,y) => ({
  type: SET_COOR,
  x,
  y
})

//placeholder