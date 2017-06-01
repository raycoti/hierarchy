import axios from 'axios';
import {SET_GROUP, SET_GROUPS, SET_MEMBERS} from '../constants';
const initialState= {
  name: '',
  groups: {},
  members: {}
};

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
})

export const setMembers = (members) => ({
  type: SET_MEMBERS,
  members
})

export const getGroups = () => {
  return (dispatch) => {
    axios.get('api/groups')
      .then(groups => {
        dispatch(setGroups(groups.data))
      })
  }
}

export const getMembers = (groupId) => {
  return (dispatch) => {
    axios.get(`api/persons/${groupId}`)
      .then(members => {
        dispatch(setMembers(members.data))
      })
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