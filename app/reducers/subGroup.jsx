import axios from 'axios';
import {SET_SUBGROUP, SET_HIERARCHY, SET_LEAD} from '../constants';

const initialState = {
  name: '',
  lead: '',
  hierarchy: {}
};
/*
{
  name: 'Math Department'
  lead: 'Professor algebra'
  hierarchy { key: personid, value childrenIds
    1 : '2,3' 
    2 : ''
    3 : ''
  }
}
*/
export default function(state = initialState, action){
  const newState = Object.assign({}, state);
  switch (action.type){
    case SET_SUBGROUP:
      newState.name = action.name;
      break;
    case SET_HIERARCHY:
      newState.hierarchy = action.hierarchy;//object assign?;
      break;
    case SET_LEAD:
      newState.lead = action.lead;
      break;
    default:
      return state;
  }
  return newState;
}

export const setSubgroup = (name) => ({
  type: SET_SUBGROUP,
  name
});
export const setHierarchy = (hierarchy) => ({
  type: SET_HIERARCHY,
  hierarchy
}); //this assumes we never have to add a person to the hierarchy....... if user desires to be able to add people to a hierarchy we would need to break this up into addUser to hierarchy/add parent/add child/remove child/parent.
 export const setLead = (lead) => ({
   type: SET_LEAD,
   lead
 });
