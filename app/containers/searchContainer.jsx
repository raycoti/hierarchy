import {connect} from 'react-redux';
import React, {Component} from 'react';
import {getGroups, getMembers, setGroup, changePositions} from '../reducers/group';
import {getSubgroup, getHierarchy, getSubgroups} from '../reducers/subGroup';
import Search from '../components/search';
//import People from '../components/people';
const mapStateToProps = (state) => {
  return {
    groups: state.main.groups,
    current: state.main.id,
    subGroups: state.sub.subGroups,
    subGroup: state.sub.id,
    members: state.main.members,
    hierarchy: state.sub.hierarchy,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectGroup(id,name){
      dispatch(getMembers(id))
      dispatch(getSubgroups(id))
      dispatch(setGroup(name))
    },
    selectSubGroup(id, members){
      dispatch(getSubgroup(id, members))
    }

  }
}

class SearchContainer extends Component {
  constructor(){
    super()
    this.onChange = this.onChange.bind(this)
    this.subChange = this.subChange.bind(this)
  }
  onChange(e){
    const name = e.target.value;
    if(!this.props.groups[name]) return;
    if(this.props.current===name) return;
    const id = this.props.groups[name].id;
    this.props.selectGroup(id,name);
    //TODO clear canvas when switches members

  }
  
  subChange(e){
     const id = e.target.value;
     if(id==='default') return;
     if(this.props.subGroup===id) return;
     this.props.selectSubGroup(id,this.props.members);
    //clear text when switches
  }
  render(){
    return(
      <Search subChange={this.subChange} onClick={this.props.changePos} onChange={this.onChange} />
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer)
