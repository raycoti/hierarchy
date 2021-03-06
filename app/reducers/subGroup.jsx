import axios from 'axios';
import {SET_SUBGROUP, SET_HIERARCHY, SET_LEAD, SET_SUBGROUPS} from '../constants';
import {changePositions} from './group'

const initialState = {
  id: -1,
  lead: '',
  subGroups: [],
  //members: {} ?
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
      newState.id = action.id;
      break;
    case SET_HIERARCHY:
      newState.hierarchy = action.hierarchy;
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

export const setSubgroup = (id) => ({
  type: SET_SUBGROUP,
  id
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

export const getSubgroup = (id, members) => {
  return (dispatch) => {
    axios.get(`api/subgroup/${id}`)
      .then(subgroup => {
        dispatch(setSubgroup(id));
        dispatch(setLead(subgroup.data.leadID))
        dispatch(getHierarchy(id,subgroup.data.leadID,members));
      });
  };
};

export const getHierarchy = (groupId,leadId,members) => {
  return (dispatch) => {
    axios.get(`api/relationships/${groupId}`)
      .then(subgroup => dispatch(setHierarchy(subgroup.data)))
      .then(data=>dispatch(changePositions(members,leadId, data.hierarchy)));
  };
};

