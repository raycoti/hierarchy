import axios from 'axios';
import {SET_SUBGROUP, SET_HIERARCHY, SET_LEAD, SET_SUBGROUPS} from '../constants';

const initialState = {
  name: '',
  lead: '',
  subGroups: [],
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
    case SET_SUBGROUPS:
      newState.subGroups = action.subGroups;
      break;
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

export const setSubgroups = (subGroups) => ({
  type: SET_SUBGROUPS,
  subGroups
});

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

export const getSubgroups = (groupId) => {
  return (dispatch) => {
    axios.get(`api/subgroups/${groupId}`)
      .then(subgroups => {
        dispatch(setSubgroups(subgroups.data))
      })
  }
}

export const getSubgroup = (id) => {
  return (dispatch) => {
    axios.get(`api/subgroup/${id}`)
      .then(subgroup => {
        dispatch(setSubgroup(subgroup.data.name));
        dispatch(setLead(subgroup.data.leadID));
      });
  };
};

export const getHierarchy = (groupId) => {
  return (dispatch) => {
    axios.get(`api/relationships/${groupId}`)
      .then(subgroup => dispatch(setHierarchy(subgroup.data)));
  };
};

