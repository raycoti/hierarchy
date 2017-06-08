import axios from 'axios';
import {SET_GROUP, SET_GROUPS, SET_MEMBERS, SET_POSITIONS, CHANGE_POSITION} from '../constants';
const initialState= {
  name: '',
  groups: {},
  positions: {},
  members: {}
};

/*
member: {x:,
  y:,
  des:
  name:}}
*/

export default function(state = initialState, action){
  const newState = Object.assign({}, state);
  switch(action.type){
    case SET_GROUP:
      newState.name = action.groupName
      break;
    case SET_GROUPS:
      newState.groups = action.groups;
      break;
    case SET_MEMBERS:
      newState.members = action.members;
      break; 
    case SET_POSITIONS:
      newState.positions = action.positions;
      break;
    case CHANGE_POSITION:
      newState.positions= Object.assign({},newState.positions) //need to nest each level of the object
      newState.positions[action.id] = Object.assign({},action.position)
      break;
    default:
      return state;
  }
  return newState;
}

export const setGroups = (groups) => ({
  type: SET_GROUPS,
  groups
});

export const setGroup = (groupName) => ({
  type: SET_GROUP,
  groupName
});

export const setMembers = (members) => ({
  type: SET_MEMBERS,
  members
});

export const setPositions = (positions)=>({
  type: SET_POSITIONS,
  positions
});

export const setPosition = (id,position)=>({
  type: CHANGE_POSITION,
  id,
  position
});

export const getGroups = () => {
  return (dispatch) => {
    axios.get('api/groups')
      .then(groups => {
        dispatch(setGroups(groups.data))
      })
  }
};

export const getMembers = (groupId) => {
  return (dispatch) => {
    axios.get(`api/persons/${groupId}`)
      .then(members => {
        dispatch(setMembers(members.data))
        dispatch(createPositions(members.data))
      })
  }
};


const createPositions = (members)=> {
  return (dispatch) => {
    const positions = Object.keys(members).reduce((acc,cur)=>{
      acc[cur] = {x:0, y:0};
      return acc;
    },{})
    dispatch(setPositions(positions))
  }
} 

/*
{
  name: 'Math Department'
  members{ key: personid, value- info 
    1 : {name, role}
    2 : ''
    3 : ''
  }
}
*/