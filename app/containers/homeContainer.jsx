import {connect} from 'react-redux';
import React, {Component} from 'react';
import {getGroups, getMembers} from '../reducers/group';
import {getSubgroup, getHierarchy, getSubgroups} from '../reducers/subGroup';

const mapStateToProps = (state) => {
  return {
    groups: state.main.groups,
    current: state.main.name,
    subGroups: state.sub.subGroups,
    hierarchy: state.sub.hierarchy,
    lead: state.sub.lead
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
    this.props.getAllGroups()
  }
  render(){
    return (
      <div >
        <h1 onClick={()=>this.props.selectGroup(this.props.groups,"C College")}> subgroup yo </h1>
        <h2 onClick={()=>this.props.selectSubGroup(this.props.subGroups[0].id)} > subgroup 1 </h2>
        <h2 onClick={()=>this.props.selectSubGroup(this.props.subGroups[1].id)} >sub group 2 </h2>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
