import axios from 'axios';

const initialState= {
  name: '',
  groups: [],
  currentId : -1,
  members: {}
};

export default function(state = initialState, action){
  const newState = Object.assign({}, state);
  switch(action.type){
    case :
    default:
  }
  return state;
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