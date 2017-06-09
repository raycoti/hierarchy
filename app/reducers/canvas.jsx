import {SET_TEXT, SET_COOR, SET_ROLE} from '../constants';

const initialState = {
  info: '',//read (name)
  role: '',
  x: 0,
  y: 0,
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
    case SET_ROLE:
      newState.role = action.role;
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

export const setRole = (role) => ({
  type: SET_ROLE,
  role
})

//placeholder