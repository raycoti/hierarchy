import {connect} from 'react-redux';
import React, {Component} from 'react';
import {getGroups, getMembers, setGroup} from '../reducers/group';
import {getSubgroup, getHierarchy, getSubgroups} from '../reducers/subGroup';
import Search from '../components/search';
//import People from '../components/people';
const mapStateToProps = (state) => {
  return {
    groups: state.main.groups,
    current: state.main.id,
    subGroups: state.sub.subGroups,
    subGroup: state.sub.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectGroup(id,name){
      dispatch(getMembers(id))
      dispatch(getSubgroups(id))
      dispatch(setGroup(name))
    },
    selectSubGroup(id){
      dispatch(getSubgroup(id))
      dispatch(getHierarchy(id))
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
  }
  subChange(e){
     const id = e.target.value;
     if(id==='default') return;
     if(this.props.subGroup===id) return;
     this.props.selectSubGroup(id);
  }
  render(){
    return(
      <Search subChange={this.subChange} onChange={this.onChange} />
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer)
