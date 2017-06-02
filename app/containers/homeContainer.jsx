import {connect} from 'react-redux';
import React, {Component} from 'react';
import {getGroups, getMembers, setGroup} from '../reducers/group';
import {getSubgroup, getHierarchy, getSubgroups} from '../reducers/subGroup';
import SearchContainer from './searchContainer';
import MembersContainer from './membersContainer';
const mapStateToProps = (state) => {
  return {
    groups: state.main.groups,
    current: state.main.name,
    subGroups: state.sub.subGroups,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllGroups(){
      dispatch(getGroups());
    },
    selectGroup(groups,name){
      if(!groups[name]) return;
      const id = groups[name].id;
      dispatch(getMembers(id))
      dispatch(getSubgroups(id))
      dispatch(setGroup(name))
      //render out stuff
    },
    selectSubGroup(id){
      dispatch(getSubgroup(id))
      dispatch(getHierarchy(id))
    }

  }
}

class HomeContainer extends Component {
  constructor(){
    super()
  }
  componentWillMount(){
    this.props.getAllGroups() //the only dispatch that should stay
  }
  render(){
    return (
      <div >
        <SearchContainer />
        <MembersContainer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
